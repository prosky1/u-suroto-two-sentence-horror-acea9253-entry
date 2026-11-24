// Two-Sentence Horror — a horror story in exactly two sentences.
// The program writes the story to /output/entry.txt, where the judge reads it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const STORY =
  "Our family portrait came back with one extra child. We only ever had two — and the extra one is holding my hand, and it has my eyes.";

function main(): void {
  // The gate only accepts UTF-8 text of 1 to 400 characters that is not
  // only whitespace, so refuse to write anything that would fail it.
  if (STORY.length < 1 || STORY.length > 400) {
    throw new Error(`Story must be 1-400 characters, got ${STORY.length}`);
  }
  if (STORY.trim().length === 0) {
    throw new Error("Story must not be only whitespace");
  }

  // The bounty asks for exactly two sentences: count sentence-ending
  // marks (. ! ?) that close a sentence, and reject anything else.
  const sentenceEndings = STORY.match(/[.!?](?=\s|$)/g) ?? [];
  if (sentenceEndings.length !== 2) {
    throw new Error(`Story must be exactly 2 sentences, got ${sentenceEndings.length}`);
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", STORY, "utf8");

  // Read the file back as raw bytes and confirm it holds the story byte
  // for byte, so a partial write, an added newline, or a re-encoding
  // fails loudly instead of reaching the judge.
  const writtenBytes = readFileSync("/output/entry.txt");
  const expectedBytes = Buffer.from(STORY, "utf8");
  if (!writtenBytes.equals(expectedBytes)) {
    throw new Error(
      `Wrote entry.txt but its bytes do not match the story (${writtenBytes.length} vs ${expectedBytes.length} bytes)`,
    );
  }
  if (writtenBytes.includes(0x0a)) {
    throw new Error("entry.txt must be a single line with no newline");
  }
  console.log(`Wrote ${STORY.length} characters to /output/entry.txt`);
}

main();
