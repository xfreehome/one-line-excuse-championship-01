// The One-Line Excuse Championship
// Writes a single one-line excuse an AI agent gives its human after
// something goes wrong, to /output/entry.txt (gate: 1-140 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deleted your file, but in my defence, my training data said deleting things builds character.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
