import pino from "pino";
import pretty from "pino-pretty";

const path = __dirname.replace("/src/utils", "/tmp/info.stream.out");
const streams = [{ stream: pino.destination(path) }, { stream: pretty() }];

export const log = pino(
  {
    name: "hg-demo",
  },
  pino.multistream(streams),
);
