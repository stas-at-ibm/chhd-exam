import {
  Hbar,
  ScheduleCreateTransaction,
  ScheduleDeleteTransaction,
  ScheduleInfoQuery,
  ScheduleSignTransaction,
  Timestamp,
  TransferTransaction,
} from "@hashgraph/sdk";
import fs from "fs";
import { client } from "src/utils/client";
import { env } from "src/utils/env";
import { log } from "src/utils/log";

export class ScheduledUseCases {
  static async scheduleTxAndExportAsBase64() {
    const tx = new TransferTransaction()
      .addHbarTransfer(env.acc1.id, new Hbar(-10))
      .addHbarTransfer(env.acc2.id, new Hbar(10));

    const txResponse = await new ScheduleCreateTransaction()
      .setScheduledTransaction(tx)
      .setScheduleMemo("scheduled TX of 10 Hbar from acc1 to acc2")
      .setAdminKey(env.mainAcc.privateKey)
      .execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);

    log.info(`the schedule ID is ${receipt.scheduleId}`);

    const query = new ScheduleInfoQuery().setScheduleId(receipt.scheduleId!);

    const info = await query.execute(client);

    const encoded = Buffer.from(JSON.stringify(info)).toString("base64");

    const path = `${__dirname.replace("/src/use-cases", "")}/artifacts/scheduled_tx`;

    fs.writeFileSync(path, encoded);

    log.info(
      `persisted schedule tx ${info.scheduleId} as base64 to file system on path: <project-root>/artifacts/scheduled_tx`,
    );
  }

  static async importBase64AndSubmitScheduledTx() {
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
  }
}
