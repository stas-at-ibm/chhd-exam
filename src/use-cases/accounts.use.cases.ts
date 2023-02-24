import {
  AccountBalanceQuery,
  AccountCreateTransaction,
  Hbar,
  PrivateKey,
} from "@hashgraph/sdk";
import fs from "fs";
import { log } from "src/utils/log";
import { client } from "src/utils/client";

interface Account {
  name: string;
  id: string;
  privateKey: string;
  publicKey: string;
}

export class AccountUseCases {
  static async createAccounts() {}
}
