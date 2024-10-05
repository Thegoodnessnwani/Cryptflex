import { useWallet } from "@/hooks/use-contexts";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import ButtonSec from "../global/button-primary";
import solflareSVG from "@/assets/solflare.svg";
import { twMerge } from "tailwind-merge";

export function WalletConnectionDialog({ isOpen }: { isOpen: boolean }) {
    const { isWalletConnected, connectWallet } = useWallet();

    return (
        <Dialog open={isOpen}>
            <DialogTrigger asChild>
                <Button
                    // variant="secondary"
                    className={twMerge(
                        "flex items-center gap-x-3 text-[#84828A] py-7 mt-10 pr-6 hover:border-l-orange-500 border-l-4 rounded-none animate-bounce",
                        !isWalletConnected && "animate-pulse"
                    )}
                >
                    <img
                        src={solflareSVG}
                        alt="Solflare Wallet"
                        className="w-8 h-8"
                    />
                    <span>Connect Wallet</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="rounded-xl bg-black md:min-w-[600px] max-h-[600px] overflow-y-auto px-3 sm:px-4 w-[90%] no-scrollbar">
                <img
                    src={solflareSVG}
                    alt="Solflare Wallet"
                    className="max-w-max mx-auto sm:mx-0"
                />

                <DialogHeader>
                    <DialogTitle>Connect Solflare Wallet</DialogTitle>
                    <DialogDescription>
                        You need to connect your Solflare wallet to use this
                        application.
                    </DialogDescription>
                </DialogHeader>
                <ButtonSec
                    onClick={() => connectWallet()}
                    className="bg-orange-500 hover:bg-orange-600 h-10 text-white"
                >
                    Connect
                </ButtonSec>
            </DialogContent>
        </Dialog>
    );
}

export function WalletDisconnectDialog() {
    const { disconnectWallet } = useWallet();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    // variant="secondary"
                    className="flex items-center space-x-4 py-4 h-10  group  mt-4"
                >
                    <span>Disconnect Wallet</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="rounded-xl bg-black md:min-w-[600px] max-h-[600px] overflow-y-auto px-3 sm:px-4 w-[90%] no-scrollbar">
                <img
                    src={solflareSVG}
                    alt="Solflare Wallet"
                    className="max-w-max mx-auto sm:mx-0"
                />
                <DialogHeader>
                    <DialogTitle>Disconnect Solflare Wallet</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to disconnect your Solflare
                        wallet?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-end gap-x-4">
                    <DialogClose className="h-8 px-3">Close</DialogClose>
                    <ButtonSec
                        variant="secondary"
                        onClick={disconnectWallet}
                        className="h-10 bg-red-500"
                    >
                        Disconnect
                    </ButtonSec>
                </div>
            </DialogContent>
        </Dialog>
    );
}
