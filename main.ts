import { mkdir, writeFile } from "node:fs/promises";

const story: string =
  "I finally got my phone to stop listening to me. Now it just whispers back everything I think before I say it.";

function validateStory(text: string): void {
  if (!text || text.trim().length === 0) {
    throw new Error("Validation failed: story text must not be empty or whitespace-only.");
  }
  if (text.length < 1 || text.length > 400) {
    throw new Error(
      `Validation failed: story length ${text.length} is outside the allowed range of 1–400 characters.`,
    );
  }
  const terminators = text.match(/[.!?]+(?=\s|$)/g) ?? [];
  if (terminators.length !== 2) {
    throw new Error(
      `Validation failed: story must contain exactly two sentences, found ${terminators.length}.`,
    );
  }
}

try {
  validateStory(story);
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", story, "utf8");
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to write entry: ${message}`);
  process.exitCode = 1;
}
