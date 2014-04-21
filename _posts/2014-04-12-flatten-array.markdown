---
layout: puzzle
title:  "Flatten Array"
date:   2014-04-12
categories: puzzles
tags: [JavaScript, Flatten, Array, Utility]
difficulty: Intermediate
short_description: Write a function that flattens an array.
github_contributors: [dhruvbhatia]
---

## Puzzle
> Write a function **`array_flatten`** that takes a `contents` array and return a flattened array of all elements as output.

## Examples
~~~ javascript
// INPUT
> var contents = [1, [2, 3, [4]], {a: 5}, ["John", [{b: ["test"]}]]];
> array_flatten(contents);

// OUTPUT
[1, 2, 3, 4, {a: 5}, "John", {b: ["test"]}];
~~~

<a name="solution"></a>

## Solution

### How It Works
This solution uses recursion to complete the following steps:

1. Create an empty `output` array to return.
2. Loop through the `contents` array elements.
    * Check the type of the current `element` in the loop.
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
* @param {array} contents - Input array
* @return {array} output - Flattened array
*
**/
function array_flatten(contents) {

  // the output array we will return
  var output = [];
  
  // iterate over contents
  for(var i = 0; i < contents.length; i++) {
    
    // check if element is an array or not
    if(!Array.isArray(contents[i])) {

      // element is not an array - push to output array
      output.push(contents[i]);

    } else {

      // element is an array - call array_flattten on element recursively
      var recursive_output = array_flatten(contents[i]);
      
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
The following libraries have functions that solve this puzzle:

* [Lo-Dash's flatten function][lodash] - `_.flatten` flattens a nested array. In addition you can choose to only flatten the first level or pass elements to a callback before flattening.

[lodash]:    http://lodash.com/docs#flatten