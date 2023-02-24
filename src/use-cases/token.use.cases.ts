import {
  AccountBalanceQuery,
  Hbar,
  PrivateKey,
  TokenAssociateTransaction,
  TokenCreateTransaction,
  TokenSupplyType,
  TokenType,
  TransferTransaction,
} from "@hashgraph/sdk";
import { log } from "src/utils/log";
import { env } from "src/utils/env";
import { client } from "src/utils/client";

export class TokenUseCase {
  static async createFungibleTokenInAccount1() {
    const tx = new TokenCreateTransaction()
      .setTokenName("CHHD Exam Token")
      .setTokenSymbol("CET")
      .setTokenType(TokenType.FungibleCommon)
      .setTreasuryAccountId(env.acc1.id)
      .setInitialSupply(350.5)
      .setMaxSupply(500)
      .setSupplyType(TokenSupplyType.Finite)
      .setSupplyKey(env.acc2.publicKey)
      .setAdminKey(env.acc1.publicKey)
      .freezeWith(client);

    const signTx = await tx.sign(env.acc1.privateKey);

    const txResponse = await signTx.execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);

    log.info(`the new token ID is ${receipt.tokenId}`);

    const query = new AccountBalanceQuery().setAccountId(env.acc1.id);

    const balance = await query.execute(client);

    log.info(
      `the balance of the user ${env.acc1.id} is: ${balance.tokens!.get(
        receipt.tokenId!,
      )}`,
    );
  }

  static async transferTokensToAcc3AndAcc4() {
    // first block transfers tokens to acc3 and logs balance of
    // tx participants
    await associate(env.acc3.id, env.acc3.privateKey);
    await transfer(
      env.acc1.id,
      env.acc3.id,
      env.acc1.privateKey,
      env.acc3.privateKey,
      25.25,
    );
    await logBalance(env.acc3.id);

    // second block transfers tokens to acc4 and logs balance of
    // tx participants
    await associate(env.acc4.id, env.acc4.privateKey);
    await transfer(
      env.acc1.id,
      env.acc4.id,
      env.acc1.privateKey,
      env.acc4.privateKey,
      25.25,
    );
    await logBalance(env.acc4.id);

    async function associate(id: string, privateKey: PrivateKey) {
      const tx = new TokenAssociateTransaction()
        .setAccountId(id)
        .setTokenIds([env.tokenId])
        .freezeWith(client);

      const signTx = await tx.sign(privateKey);

      const txResponse = await signTx.execute(client);

      const receipt = await txResponse.getReceipt(client);

      log.info(`transaction status is ${receipt.status}`);

      log.info(`token ${env.tokenId} associated with the user ${id} account`);
    }

    async function transfer(
      sourceId: string,
      targetId: string,
      sourcePrivateKey: PrivateKey,
      targetPrivateKey: PrivateKey,
      amount: number,
    ) {
      const tx = new TransferTransaction()
        .addTokenTransfer(env.tokenId, sourceId, -amount)
        .addTokenTransfer(env.tokenId, targetId, amount)
        .freezeWith(client);

      const signTx = await (await tx.sign(sourcePrivateKey)).sign(targetPrivateKey);

      const txResponse = await signTx.execute(client);

      const receipt = await txResponse.getReceipt(client);

      log.info(`transaction status is ${receipt.status}`);
    }

    async function logBalance(recieverId: string) {
      const senderBalance = await new AccountBalanceQuery()
        .setAccountId(env.acc1.id)
        .execute(client);

      log.info(`the account balance for sender ${env.acc1.id} is ${senderBalance.hbars}`);
      log.info(
        `the token balance for sender ${env.acc1.id} is: ${senderBalance.tokens!.get(
          env.tokenId,
        )}`,
      );

      const recieverBalance = await new AccountBalanceQuery()
        .setAccountId(recieverId)
        .execute(client);

      log.info(
        `the account balance for reciever ${recieverId} is ${recieverBalance.hbars}`,
      );
      log.info(
        `the token balance for reciever ${recieverId} is: ${recieverBalance.tokens!.get(
          env.tokenId,
        )}`,
      );
    }
  }

  static async addNameCase2() {
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }
}
