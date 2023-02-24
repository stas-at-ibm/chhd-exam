import {
  ContractCreateFlow,
  ContractDeleteTransaction,
  ContractExecuteTransaction,
  ContractFunctionParameters,
} from "@hashgraph/sdk";
import { client } from "src/utils/client";
import { env } from "src/utils/env";
import { log } from "src/utils/log";

export class SmartContractUseCases {
  static async deploySmartContract() {
    // const bytecode = require("../../artifacts/ADD_FILE_NAME.json").bytecode;
    //
    // tx
    //
    // const signTx = await tx.sign(ADD_PRIVATE_KEY);
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
    // log.info(`your contract ID is: ${receipt.contractId}`);
  }

  static async callFunc1() {
    // const tx = new ContractExecuteTransaction()
    //
    // const signTx = await tx.sign(ADD KAY);
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
    // const record = await txResponse.getRecord(client);
    //
    // log.info(`the result of ADD FUNC NAME is: ${record.contractFunctionResult?.ADD METHOD}`);
  }

  static async deleteContract() {
    // const tx = await new ContractDeleteTransaction()
    //
    // const signTx = await tx.sign(env.acc1.privateKey);
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
    // log.info(`contract ${env.contractId} deleted`);
  }
}
