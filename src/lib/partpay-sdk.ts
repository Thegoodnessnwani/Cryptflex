import { PartPayClient } from '@partpay-libs/sdk';
// import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
// import { generateSigner, KeypairSigner, } from '@metaplex-foundation/umi';
import { Keypair } from '@solana/web3.js';

enum VendorStatus {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending"
}

export interface VendorData {
  name: string;
  image: string;
  shopName: string;
  description: string;
  status: VendorStatus;
}

async function createVendor(vendorData: VendorData) {
    const vendorKeypair = Keypair.generate();
    const client = PartPayClient.createWithUmi(import.meta.env.VITE_PARTPAY_RPC, vendorKeypair.secretKey);
  
    const transactionBuilder = await client.createVendor({
      owner: vendorKeypair.publicKey,
      name: vendorData.name,
      image: vendorData.image,
      metadata: {
        shopName: vendorData.shopName,
        description: vendorData.description,
        status: vendorData.status,
      },
    });
  
    const signature = await client.sendAndConfirmTransaction(transactionBuilder);
  
    return {
      signature,
      secretKey: Buffer.from(vendorKeypair.secretKey).toString('hex'),
      publicKey: vendorKeypair.publicKey.toBase58(),
    };
  }

export { createVendor };