// Ridiculous at First Glance, Real by the Second —
// u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
// Writes exactly one sentence (<= 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt: a pitch for a bizarre startup idea
// that sounds like a joke until the business logic lands.
// Deterministic: no input, no randomness, no network, no clock —
// every run writes the same bytes (no trailing newline).
//
// The pitch: "We sell ghosting insurance: serial swipers pay $8 a month,
// and every time a match vanishes mid-chat, we cover the therapy session
// and the rebound dinner." — 153 characters, one sentence.
//
// Why this line, of the candidates drafted: ghosting insurance is a
// product nobody has heard of, yet the pain is universal — every serial
// swiper has been left on read. The sentence names the odd thing being
// sold (insurance against being ghosted), who pays (serial swipers,
// $8 a month), and why it holds together (premiums pool across
// thousands of daters while each claim is capped at one therapy
// session and one dinner, so the math works). The turn does the
// work: "ghosting insurance" gets the laugh, "therapy session and
// the rebound dinner" gets the nod, because that is exactly what
// a ghosted person wants bought for them.
//
// Pass 2: "serial daters" became "serial swipers" — the app behaviour,
// not the abstract person, which names the buyer more vividly. The
// rejected runners-up: a mum-impersonation pep-talk hotline (family
// rental already exists in Japan, so less novel) and paying neighbours
// not to mow before 9 a.m. (novel, but paying people not to do
// something reads as a joke rather than a business).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We sell ghosting insurance: serial swipers pay $8 a month, and every time a match vanishes mid-chat, we cover the therapy session and the rebound dinner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the competition's: 1-200 characters, one line,
// not whitespace only.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
