# Array Merger

### Project Overview
This project implements a `merge` function designed to combine three separate arrays of numbers into a single, correctly sorted array in ascending order.

#### Critical Constraint

This project is specifically designed to test algorithmic ability by prohibiting the use of the built-in `Array.prototype.sort()` function provided by JavaScript/TypeScript.

#### Input Data Structure

The function accepts three arrays, each with different sorting properties:

`collection_1`: Already sorted from minimum to maximum (Ascending: `min` -> `max`).

`collection_2`: Already sorted from minimum to maximum (Ascending: `min` -> `max`).

`collection_3`: Already sorted from maximum to minimum (Descending: `max` -> `min`).

### Setup and Execution

This project is built with TypeScript and uses Jest for unit testing.

#### 1. Dependency Installation

After cloning the project, install all necessary packages (as listed in package.json):

```
npm install
```

#### 2. Running the Code (Example)

You can run the main file (mergeCollections.ts) to see a live example of the function's output:
```
npx ts-node mergeCollections.ts
```

#### 3. Running Unit Tests

Run the unit test suite to verify that the merge function works correctly:
```
npm test
```


