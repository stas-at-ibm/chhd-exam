import {
  AccountBalanceQuery,
  Hbar,
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

  static async addNameCase2() {
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }
}
