[![Node.js CI](https://github.com/eallen10/coding-puzzlers/actions/workflows/node.js.yml/badge.svg)](https://github.com/eallen10/coding-puzzlers/actions/workflows/node.js.yml)

# coding-puzzlers

A place to view, solve, and run common coding puzzles.  

## Getting Started

### Clone
`git clone https://github.com/eallen10/coding-puzzlers.git`

### Install
`npm i`

### Run All Puzzles
`npm run test`

### Run Specific Puzzle
`npm run test -- -i '<path_to_puzzle_spec>`

### Add New Puzzle
`npm run add:new:puzzle <new_puzzle_name>`  

This will create a new puzzle folder and the following template files:
- `puzzle.md` - the description of your new puzzle
- `solutions.ts` - a file to store solutions to your puzzle
- `<new_puzzle_name>.spec.ts` - a spec file to hold your puzzle tests

## Ledger
The puzzles in this project were gathered from the following sources:

### [The Blind 75](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions)

| Name | Difficulty| Added | Solution |
|------|-----------|-------|----------|
| two-sum | easy | y | y |
| best-time-to-buy-and-sell-stock | easy | y | y |
| contains-duplicate | easy | y | y |
| product-of-array-except-self | medium | y | y |
| maximum-subarray | medium | y | y |
| maximum-product-subarray | medium | y | y |
| find-minimum-in-rotated-sorted-array | medium | y | y |
| search-in-rotated-sorted-array | medium | n | n |
| three-sum | medium | n | n |
| container-with-most-water | medium | n | n |
| sum-of-two-integers | medium | n | n |
| number-of-one-bits | easy | n | n |
| counting-bits | easy | n | n |
| missing-number | easy | n | n |
| reverse-bits | easy | n | n |
| climbing-stairs | easy | n | n |
| coin-change | medium | n | n |
| longest-increasing-subsequence | medium | y | n |

### Other Sources

| Name | Difficulty| Added | Solution |
|------|-----------|-------|----------|
| is-it-a-palindrome | easy | y | y |
| reverse-a-string | easy | y | y |
| robot-bounded-in-circle | medium | y | y |
| roman-numeral-to-number | easy | y | y |