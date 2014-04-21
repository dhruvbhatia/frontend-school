---
layout: puzzle
title:  "Custom Sort Array"
date:   2014-04-17
categories: [JavaScript]
tags: [Index, Array, Sorting]
difficulty: Easy
short_description: Write a function that rearranges an array based on a new index sequence.
github_contributors: [dhruvbhatia]
---

## Puzzle
> Write a function **`rearrange_array`** which takes a `contents` array and an `indexes` array and mutates `contents` so that each element ends up in their new index. 

## Examples
~~~ javascript
// INPUT
> var contents = ["dog", "cat", "rat"];
> var indexes = [2, 0, 1];
> rearrange_array(contents, indexes);

// OUTPUT
["cat", "rat", "dog"];
~~~

## Solution

### How It Works

1. ***(Optional)*** Validate input parameters.
    * Ensure `contents` and `indexes` are the same length.
    * Ensure `indexes` elements are unique, sequential values from `0..indexes.length`.
2. Create an empty `output` array to return.
3. Loop through the `contents` array elements.
    * Add the current `element` in the loop to the `output` array, based on the corresponding index value in `indexes`.
5. Return `output`.


### Code
~~~ javascript
/**
*
* Custom sorts an input array based on values in an indexes array.
*
* @param {array} contents - Input array
* @param {array} indexes - Array with position information for the new order of the input elements
* @return {array} output - Custom sorted array
*
**/
function rearrange_array(contents, indexes) {

  // 1. (OPTIONAL) VALIDATION

  // Ensure contents and indexes are arrays
  if (!Array.isArray(contents) || !Array.isArray(indexes)) {
    throw new TypeError("contents and indexes parameters must be arrays");
  }

  // Ensure both arrays have the same length
  if (contents.length !== indexes.length) {
    throw new RangeError("contents and indexes parameters must be the same length");
  } else {

    // Ensure indexes values are within range and unique
    var indexes_seen = [];

    // Index elements must be within 0..indexes.length
    for (var i = 0; i < indexes.length; i++) {

      if(typeof indexes[i] !== "number") {

        throw new TypeError("indexes contains non-numeric elements");

      };

      if ((indexes[i] < 0) || (indexes[i] > contents.length - 1)) {

        throw new RangeError("indexes contains an element that is out of range");

      };

      // Index elements must be unique
      if (indexes_seen.indexOf(indexes[i]) !== -1) {
        throw new RangeError("indexes contains non-unique elements");
      };

      indexes_seen.push(indexes[i]);

    };

    // 2. OUTPUT ARRAY
    var output = [];


    // 3. MAIN LOOP
    for (var i = 0; i < indexes.length; i++) {
      output[indexes[i]] = contents[i];
    };

    return output;

  };
  
};
~~~

## Variations

### 1-based Indexes Array
A popular variation of the puzzle involves the `indexes` array being a 1-base array from `1..contents.length - 1` rather than `0..contents.length`.

### Alphabetical Indexes Array
A tricker variation involves the `indexes` array being an alphabetical array rather than a numerical array (e.g. `["c", "a", "b"]` rather than `[2, 0, 1]`). To solve this, incorporate a step that [converts an alphabetical array to a numerical range][alpharange].

[alpharange]:    /puzzles/2014/04/18/alphabet-array-to-numeric-array.html