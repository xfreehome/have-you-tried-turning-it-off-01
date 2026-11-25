import { mkdirSync, writeFileSync } from "node:fs";

// One funny line a hopeless tech support agent says to a desperate customer.
// The joke twists the classic "turn it off and on again": the agent is
// cheerfully useless — his one success story is from 2019, for someone
// else, on a totally different computer.
const ENTRY =
  "Good news \u2014 I've seen this exact error before. Turning it off and on again fixed it once, in 2019, for someone else, on a totally different computer.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
const MIN_CHARS = 1;
const MAX_CHARS = 199;

if (ENTRY.length < MIN_CHARS || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${ENTRY.length} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate.`,
  );
}
if (!/\S/.test(ENTRY)) {
  throw new Error("Entry must not be only white space.");
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
