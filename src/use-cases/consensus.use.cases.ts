import { TopicCreateTransaction, TopicMessageSubmitTransaction } from "@hashgraph/sdk";
import { client } from "src/utils/client";
import { env } from "src/utils/env";
import { log } from "src/utils/log";

export class ConsensusUseCases {
  static async addNameCase1() {
    // const tx = new TopicCreateTransaction()
    // const txResponse = await tx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
    // log.info(`your topic ID is: ${receipt.topicId}`);
  }

  static async addNameCase2() {
    // const signTx = await new TopicMessageSubmitTransaction({
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }
}
