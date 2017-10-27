## Chopping an array into equal-sized sub-arrays


### Run the Chopper

These steps assume you already have node installed.

- clone the repo: `https://github.com/skomer/array-chopper.git`
- set up npm: `npm init`
- install mocha: `npm install --save-dev mocha`
- run the tests: `npm test`
- _optional_: repeat "Get to the chopper" internally throughout


### The Task

```
Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have length equal to the remainder.

Example:
Inputs [1, 2, 3, 4, 5] and 3
Output [[1, 2], [3, 4], [5]]
```