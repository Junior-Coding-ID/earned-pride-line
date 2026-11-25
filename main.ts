import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// A quiet, earned moment of pride: a father who spent a whole winter
// practicing his signature finally signs for a parcel himself.
const ENTRY =
  "Dad had spent a winter practicing his name on the backs of bills; when the parcel came, he signed for it himself and held the little screen up for me to see.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
