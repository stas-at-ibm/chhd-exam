import { TopicCreateTransaction, TopicMessageSubmitTransaction } from "@hashgraph/sdk";
import { client } from "src/utils/client";
import { env } from "src/utils/env";
import { log } from "src/utils/log";

export class ConsensusUseCases {
  static async createTopicWithAcc1() {
    client.setOperator(env.acc1.id, env.acc1.privateKey);

    const tx = new TopicCreateTransaction().setTopicMemo("CHHD Submision Topic for S.J.");

    const txResponse = await tx.execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);

    log.info(`your topic ID is: ${receipt.topicId}`);
  }

  static async submitTimestampAsMessage() {
    client.setOperator(env.acc1.id, env.acc1.privateKey);

    const tx = new TopicMessageSubmitTransaction({
      topicId: env.topicId,
      message: `this is a timestamp from message submit: ${Date.now().toString()}`,
    });

    const txResponse = await tx.execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);
  }
}
