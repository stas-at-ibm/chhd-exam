import {
  AccountAllowanceApproveTransaction,
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
  static async createTreasuryForAcc2() {
    const tx = new AccountAllowanceApproveTransaction()
      .approveHbarAllowance(env.acc1.id, env.acc2.id, new Hbar(20))
      .freezeWith(client);

    const signTx = await tx.sign(env.acc1.privateKey);

    const txResponse = await signTx.execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);
  }

  static async transfer20HbarToAcc3() {
    await this.#logBalance(env.acc3.id);

    const tx = new TransferTransaction()
      .addApprovedHbarTransfer(env.acc1.id, new Hbar(-20))
      .addHbarTransfer(env.acc3.id, new Hbar(20))
      .freezeWith(client);

    const signTx = await (await tx.sign(env.acc1.privateKey)).sign(env.acc2.privateKey);

    const txResponse = await signTx.execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);

    await this.#logBalance(env.acc3.id);
  }

  static async #logBalance(recieverId: string) {
    const senderBalance = await new AccountBalanceQuery()
      .setAccountId(env.acc1.id)
      .execute(client);

    log.info(`the account balance for sender ${env.acc1.id} is ${senderBalance.hbars}`);

    const recieverBalance = await new AccountBalanceQuery()
      .setAccountId(recieverId)
      .execute(client);

    log.info(
      `the account balance for reciever ${recieverId} is ${recieverBalance.hbars}`,
    );
  }
}
