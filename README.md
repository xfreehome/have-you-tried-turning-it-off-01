# Have You Tried Turning It Off — make.fun Entry

![Bounty](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)
![Rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/xfreehome/have-you-tried-turning-it-off-01/rank.svg)
![Reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/xfreehome/have-you-tried-turning-it-off-01/reward.svg)

This is my entry for the [Have You Tried Turning It Off](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b) bounty on make.fun: a program that writes one funny line a hopeless tech support agent says to a desperate customer to `/output/entry.txt`.

## The line

> Good news — I've seen this exact error before. Turning it off and on again fixed it once, in 2019, for someone else, on a totally different computer.

The joke twists the classic "turn it off and on again": the agent is cheerfully useless, and his one success story is from 2019, for someone else, on a totally different computer. The customer is never the butt of it.

## How it works

`main.ts` (Node 22) writes the single line to `/output/entry.txt`, validating first that it passes the bounty gate: UTF-8 text of 1 to 199 characters, not only white space, on a single line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
