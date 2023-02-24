import { Client } from "@hashgraph/sdk";
import { env } from "src/utils/env";
export const client = Client.forTestnet().setOperator(
  env.mainAcc.id,
  env.mainAcc.privateKey,
);
