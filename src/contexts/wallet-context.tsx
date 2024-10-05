/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useEffect } from "react";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import SolflareWallet from "@solflare-wallet/sdk";
import { checkWalletConnection, updateUser } from "@/firebase/db";
import { useAuth } from "@/hooks/use-contexts";
import { toast } from "sonner";

interface WalletContextType {
    wallet: SolflareWallet | undefined;
    publicKey: string | undefined;
    isWalletConnected: boolean;
    balance: number | undefined;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const RPC_ENDPOINTS = [import.meta.env.VITE_SOL_BALANCE_RPC_ENDPOINT as string];

const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [wallet, setWallet] = useState<SolflareWallet | undefined>();
    const [balance, setBalance] = useState<number | undefined>();
    const [publicKey, setPublicKey] = useState<string | undefined>();
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const { currentUser } = useAuth();

    useEffect(() => {
        async function initializeWallet() {
            try {
                const solflareWallet = new SolflareWallet();
                setWallet(solflareWallet);
                const isSolflareInstalled = await solflareWallet.detectWallet();
                if (!isSolflareInstalled) {
                    toast.info(
                        "Please install Solflare wallet to connect to the app."
                    );
                    return;
                }

                if (!currentUser) {
                    return;
                }

                if (currentUser) {
                    await confirmWalletConnection(
                        solflareWallet,
                        currentUser?.uid as string
                    );
                }
            } catch (error: any) {
                toast.error("Error initializing solflare wallet.");
                console.error(error);
            }
        }

        initializeWallet();
    }, [currentUser]);

    async function confirmWalletConnection(
        wallet: SolflareWallet | undefined,
        uid: string
    ) {
        try {
            const res = await checkWalletConnection(uid);
            if (res) {
                const walletConnected = wallet?.isConnected;
                if (walletConnected) {
                    setIsWalletConnected(true);
                    const pubKey = wallet?.publicKey;
                    if (pubKey) {
                        setPublicKey(pubKey.toBase58());
                        try {
                            const balanceValue = await getBalance(pubKey);
                            setBalance(balanceValue);
                        } catch (error) {
                            console.error("Error fetching balance:", error);
                            toast.error(
                                "Failed to fetch wallet balance. Please try again later."
                            );
                        }
                    }
                } else {
                    await updateUser(uid, { walletConnected: false });
                }
            } else {
                toast.error("Wallet not connected.");
            }
        } catch (error: any) {
            toast.error("Error confirming wallet connection.");
            console.error(error);
        }
    }
    async function connectWallet() {
        if (wallet) {
            try {
                await wallet.connect();
                const pubKey = wallet?.publicKey;
                if (pubKey) {
                    setPublicKey(pubKey.toBase58());
                    setIsWalletConnected(true);
                    try {
                        const balanceValue = await getBalance(pubKey);
                        setBalance(balanceValue);
                    } catch (error) {
                        console.error("Error fetching balance:", error);
                        toast.error(
                            "Failed to fetch wallet balance. Please try again later."
                        );
                    }
                    await updateUser(currentUser?.uid as string, {
                        walletConnected: true,
                    });
                }
            } catch (error: any) {
                console.error(error);
                toast.error("Error connecting wallet.");
            }
        }
    }

    async function disconnectWallet() {
        if (wallet) {
            wallet.disconnect();
            setPublicKey(undefined);
            setIsWalletConnected(false);
            setBalance(undefined);

            await updateUser(currentUser?.uid as string, {
                walletConnected: false,
            });
        }
    }

    async function getBalance(pubKey: PublicKey): Promise<number | undefined> {
        for (const endpoint of RPC_ENDPOINTS) {
            try {
                const connection = new Connection(endpoint);
                const balance = await connection.getBalance(pubKey);
                return balance / LAMPORTS_PER_SOL;
            } catch (error: any) {
                console.error(
                    `Error fetching balance from ${endpoint}:`,
                    error
                );
                throw new Error(
                    "Failed to fetch balance from all available endpoints"
                );
            }
        }
    }

    return (
        <WalletContext.Provider
            value={{
                wallet,
                publicKey,
                isWalletConnected,
                balance,
                connectWallet,
                disconnectWallet,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export { WalletContext, WalletProvider };
