---
layout: puzzle
title:  "Flatten Array"
date:   2014-04-12 19:34:17
categories: puzzles
tags: [JavaScript, Algorithm, Utility]
difficulty: Intermediate
short_description: Write a function that flattens an array.
---

## Puzzle
> In JavaScript, write a function **`array_flatten`** that takes an `Array` as input and return a flattened `Array` of all elements as output.

## Examples
~~~ javascript
// INPUT
> var input = [1, [2, 3, [4]], {a: 5}, ["John", [{b: ["test"]}]]];
> array_flatten(input);

// OUTPUT
[1, 2, 3, 4, {a: 5}, "John", {b: ["test"]}];
~~~

<a name="solution"></a>

## Solution

### How It Works
This solution uses recursion to complete the following steps:

1. Create an empty `output` array to return.
2. Loop through the `input` array elements.
3. Check the type of the current `element` in the loop.
    * If not an array `→` Add element to `output`.
    * If an array `→`
        * Recursively pass element to self to get `recursive_output`.
        * Loop through `recursive_output` elements and add each to `output`.
4. Return `output`.


### Code
~~~ javascript
/**
*
* Flattens an array
*
* @param {array} Input array
* @return {array} Flattened array
*
**/
function array_flatten(input) {

  // the output array we will return
  var output = [];
  
  // iterate over input
  for(var i = 0; i < input.length; i++) {
    
    // check if element is an array or not
    if(!Array.isArray(input[i])) {

      // element is not an array - push to output array
      output.push(input[i]);

    } else {

      // element is an array - call array_flattten on element recursively
      var recursive_output = array_flatten(input[i]);
      
      for(var o = 0; o < recursive_output.length; o++) {
        
        output.push(recursive_output[o]);
        
      };
      
    };
    
  };
  
  // return flattened array
  return output;
  
};
~~~

## Libraries
The following libraries have functions that perform this function:

* [Lo-Dash's flatten function][lodash] - `_.flatten` flattens a nested array. In addition you can choose to only flatten the first level or pass elements to a callback before flattening.

[lodash]:    http://lodash.com/docs#flatten