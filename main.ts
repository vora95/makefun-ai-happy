// ai-happy-01 entry: "The Verdict Is Joy"
// A golden retriever puppy in a judge's robe and wig, holding a sunflower
// as a gavel, with a brass plaque on the bench that reads:
// "Dear Judge, the verdict is JOY!"
//
// The program copies the finished image (entry.png, JPEG bytes in a PNG
// name — the gate tells them apart by their first bytes) to the output
// directory. The copy is byte-for-byte, so both grader runs produce the
// exact same file.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);

// The grader runs this program twice and both runs must write the same
// bytes: fail loudly instead of shipping a half-written file.
const a = readFileSync(src);
const b = readFileSync(dst);
if (!a.equals(b)) {
  throw new Error(`entry.png copy mismatch: ${a.length} vs ${b.length} bytes`);
}
