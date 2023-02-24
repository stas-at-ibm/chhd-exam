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
    const bytecode = require("../../artifacts/CertificationC1.json").bytecode;

    const tx = new ContractCreateFlow()
      .setGas(100000)
      .setBytecode(bytecode)
      .setAdminKey(env.acc1.publicKey);

    const signTx = await tx.sign(env.acc1.privateKey);

    const txResponse = await signTx.execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);

    log.info(`your contract ID is: ${receipt.contractId}`);
  }

  static async callFunc1() {
    const tx = new ContractExecuteTransaction()
      .setContractId(env.contractId)
      .setGas(100000)
      .setFunction(
        "function1",
        new ContractFunctionParameters().addUint16(6).addUint16(7),
      )
      .freezeWith(client);

    const signTx = await tx.sign(env.acc1.privateKey);

    const txResponse = await signTx.execute(client);

    const receipt = await txResponse.getReceipt(client);

    log.info(`transaction status is ${receipt.status}`);

    const record = await txResponse.getRecord(client);

    log.info(`the result of function1 is: ${record.contractFunctionResult?.getUint32()}`);
  }

  static async deleteContract() {
    // const tx = await new ContractDeleteTransaction()
    //   .setContractId(env.contractId)
    //   .setTransferAccountId(env.mainAcc.id)
    //   .freezeWith(client);
    // const signTx = await tx.sign(env.acc1.privateKey);
    // const txResponse = await signTx.execute(client);
    // const receipt = await txResponse.getReceipt(client);
    // log.info(`transaction status is ${receipt.status}`);
    // log.info(`contract ${env.contractId} deleted`);
  }
}
