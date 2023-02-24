import {
  AccountBalanceQuery,
  Hbar,
  TokenAssociateTransaction,
  TokenCreateTransaction,
  TokenType,
  TransferTransaction,
} from "@hashgraph/sdk";
import { log } from "src/utils/log";
import { env } from "src/utils/env";
import { client } from "src/utils/client";

export class TokenUseCase {
  static async addNameCase1() {
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }

  static async addNameCase2() {
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }
}
