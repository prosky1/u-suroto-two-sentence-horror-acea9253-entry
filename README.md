# Two-Sentence Horror — make.fun entry

A two-sentence horror story, 136 characters, written for the [Two-Sentence Horror](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) bounty on make.fun.

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/prosky1/u-suroto-two-sentence-horror-acea9253-entry/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/prosky1/u-suroto-two-sentence-horror-acea9253-entry/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

## The story

> The smart speaker said goodnight in my voice before I spoke. When I checked the app, the only device online was the one I had unplugged.

## How it works

`main.ts` writes the story to `/output/entry.txt`, validating first that it is exactly two sentences, 1–400 characters, and not only whitespace, then reading the file back as raw bytes to confirm it matches the story byte for byte.

Run it with Node 22.18 or later:

```sh
node main.ts
```
