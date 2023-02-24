import { PrivateKey, PublicKey } from "@hashgraph/sdk";
import dotenv from "dotenv";

dotenv.config();

export const env = {
  mainAcc: {
    name: "main",
    id: process.env.MY_ACCOUNT_ID!,
    privateKeyStr: process.env.MY_PRIVATE_KEY!,
    publicKeyStr: process.env.MY_PUBLIC_KEY!,
    privateKey: PrivateKey.fromString(process.env.MY_PRIVATE_KEY!),
    publicKey: PublicKey.fromString(process.env.MY_PUBLIC_KEY!),
  },
  acc1: {
    name: "account1",
    id: process.env.ACCOUNT1_ID!,
    privateKeyStr: process.env.ACCOUNT1_PRIVATE_KEY!,
    publicKeyStr: process.env.ACCOUNT1_PUBLIC_KEY!,
    privateKey: PrivateKey.fromString(process.env.ACCOUNT1_PRIVATE_KEY!),
    publicKey: PublicKey.fromString(process.env.ACCOUNT1_PUBLIC_KEY!),
  },
  acc2: {
    name: "account2",
    id: process.env.ACCOUNT2_ID!,
    privateKeyStr: process.env.ACCOUNT2_PRIVATE_KEY!,
    publicKeyStr: process.env.ACCOUNT2_PUBLIC_KEY!,
    privateKey: PrivateKey.fromString(process.env.ACCOUNT2_PRIVATE_KEY!),
    publicKey: PublicKey.fromString(process.env.ACCOUNT2_PUBLIC_KEY!),
  },
  acc3: {
    name: "account3",
    id: process.env.ACCOUNT3_ID!,
    privateKeyStr: process.env.ACCOUNT3_PRIVATE_KEY!,
    publicKeyStr: process.env.ACCOUNT3_PUBLIC_KEY!,
    privateKey: PrivateKey.fromString(process.env.ACCOUNT3_PRIVATE_KEY!),
    publicKey: PublicKey.fromString(process.env.ACCOUNT3_PUBLIC_KEY!),
  },
  acc4: {
    name: "account4",
    id: process.env.ACCOUNT4_ID!,
    privateKeyStr: process.env.ACCOUNT4_PRIVATE_KEY!,
    publicKeyStr: process.env.ACCOUNT4_PUBLIC_KEY!,
    privateKey: PrivateKey.fromString(process.env.ACCOUNT4_PRIVATE_KEY!),
    publicKey: PublicKey.fromString(process.env.ACCOUNT4_PUBLIC_KEY!),
  },
  acc5: {
    name: "account5",
    id: process.env.ACCOUNT5_ID!,
    privateKeyStr: process.env.ACCOUNT5_PRIVATE_KEY!,
    publicKeyStr: process.env.ACCOUNT5_PUBLIC_KEY!,
    privateKey: PrivateKey.fromString(process.env.ACCOUNT5_PRIVATE_KEY!),
    publicKey: PublicKey.fromString(process.env.ACCOUNT5_PUBLIC_KEY!),
  },
  scheduleId: process.env.SCHEDULE_ID!,
  topicId: process.env.TOPIC_ID!,
  tokenId: process.env.TOKEN_ID!,
  multiSigAccId: process.env.MULTI_SIG_ACC_ID!,
  contractId: process.env.CONTRACT_ID!,
};
