import {
  AccountBalanceQuery,
  AccountCreateTransaction,
  AccountId,
  Hbar,
  KeyList,
  TransferTransaction,
} from "@hashgraph/sdk";
import { client } from "src/utils/client";
import { env } from "src/utils/env";
import { log } from "src/utils/log";

export class MultiSigUseCases {
  static async addNameCase1() {
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }

  static async addNameCase2() {
    // const tx = new TransferTransaction()
    // const signTx = await tx.sign(env.acc1.privateKey);
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }
}
