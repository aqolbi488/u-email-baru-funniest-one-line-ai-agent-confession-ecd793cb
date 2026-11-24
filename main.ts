import { mkdirSync, writeFileSync } from "node:fs";

// Funniest One-Line AI Agent Confession — program/v1 entry.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, a single line, not only whitespace.
const CONFESSION =
  "I apologized for the error, then made the same error again with even more confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
