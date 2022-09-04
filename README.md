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

## Add New Puzzle
To add a new puzzle with default template files, run:  

`npm run add:new:puzzle <new_puzzle_name>`  

This will create a new puzzle folder and the following template files:
- `puzzle.md` - the description of your new puzzle
- `solutions.ts` - a file to store solutions to your puzzle
- `<new_puzzle_name>.spec.ts` - a spec file to hold your puzzle tests
