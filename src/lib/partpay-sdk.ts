/* eslint-disable @typescript-eslint/no-explicit-any */
import { PartPayClient, VendorModule } from '@partpay-libs/sdk';
// import Solflare from '@solflare-wallet/sdk';
// import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
// import { generateSigner, KeypairSigner, } from '@metaplex-foundation/umi';

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

// async function createVendor(vendorData: VendorData) {
//     const vendorKeypair = Keypair.generate();
//     const client = PartPayClient.createWithUmi(import.meta.env.VITE_PARTPAY_RPC, vendorKeypair.secretKey);
  
//     const transactionBuilder = await client.createVendor({
//       owner: vendorKeypair.publicKey,
//       name: vendorData.name,
//       image: vendorData.image,
//       metadata: {
//         shopName: vendorData.shopName,
//         description: vendorData.description,
//         status: vendorData.status,
//       },
//     });

//     const signature = await client.sendAndConfirmTransaction(transactionBuilder);

//     return {
//       signature,
//       secretKey: Buffer.from(vendorKeypair.secretKey).toString('hex'),
//       publicKey: vendorKeypair.publicKey.toBase58(),
//     };
// }

async function createVendor() {
  try {
    const secretKey = new Uint8Array([1]);
    const client = PartPayClient.create("https://api.devnet.solana.com", secretKey);


    const vendorModule = new VendorModule(client);

    const vendorMetadata: any = {
      owner: client.getUmi().identity.publicKey,
      name: "My Awesome Shop",
      image: "https://example.com/shop-image.jpg",
      metadata: {
        // ... (rest of the metadata)
      }
    };

    // Create vendor without marketplace by explicitly passing null
    const vendorTransaction = await vendorModule.createVendor(vendorMetadata);
    console.log("Vendor created without marketplace:");
    console.log("Transaction signature:", vendorTransaction.transaction);
    console.log("Vendor asset public key:", vendorTransaction.assetPubkey.publicKey.toString());
    console.log("Vendor unique ID:", vendorTransaction.uniqueId.publicKey.toString());

  } catch (error) {
    console.error("Error creating vendor:", error);
  }
}

export { createVendor };