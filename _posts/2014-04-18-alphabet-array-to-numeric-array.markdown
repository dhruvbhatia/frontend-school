---
layout: puzzle
title:  "Alphabet Array to Numeric Array"
date:   2014-04-18
categories: [JavaScript, CSS]
tags: [Type Casting, Array, Number, Utility]
difficulty: Intermediate
short_description: Write a function that transforms an alphabetical array to a numerical array.
github_contributors: [dhruvbhatia]
---

## Puzzle
> Write a function **`convert_alphabet_array`** which takes a `contents` array that contains alphabetical strings and returns an array of the numerical order of each element. This is useful for turning Excel-esque column labels into column numbers. 

## Examples
~~~ javascript
// INPUT
> var contents = ["C", "D", "A", "Z", "AA"];
> convert_alphabet_array(contents);

// OUTPUT
[3, 4, 1, 26, 27]; // A is the 1st letter, Z is the 26th letter, AA is the 27th letter etc.
~~~

## Solution

### How It Works

1. ***(Optional)*** Validate input parameters.
    * Ensure `contents` elements are alphabetical strings.
2. Create a `letters` helper string and an empty `output` array to return.
3. Loop through the `contents` array elements.
    * Loop through each `element`'s letters and calculate a `running_total` based on each letter's position in our `letters` helper string.
        * Add the `running_total` to `output`.
5. Return `output`.


### Code
~~~ javascript
/**
 *
 * Custom sorts an input array based on values in an indexes array.
 *
 * @param {array} contents - Input alphabetical array
 * @return {array} output - Numerical representation of input's order
 *
 **/
function convert_alphabet_array(contents) {

  // 1. (OPTIONAL) VALIDATION

  // Ensure contents is an array
  if (!Array.isArray(contents)) {
    throw new TypeError("contents parameter must be an array");
  }

  // Ensure contents elements are alphabetical strings
  if (contents.every(function(element) {

    if ((typeof element === "string") && (/^[a-zA-Z]+$/.test(element)) === true) {
      return true;
    };

  }) !== true) {

    throw new TypeError("contents array must contain alphabetical string elements");

  }

  // 2. OUTPUT ARRAY
  var output = [];

  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


  // 3. MAIN LOOP

  // Loop through contents array elements
  for (var i = 0; i < contents.length; i++) {

    contents[i] = contents[i].toUpperCase();

    var running_total = 0;

    // Loop through the length of the current element
    for (var l = 0; l < contents[i].length; l++) {

      running_total += Math.pow(letters.length, l) * (letters.indexOf(contents[i].substr(((l + 1) * -1), 1)) + 1);

    };

    output.push(running_total);
  };

  return output;

};
~~~

## References

* [Stack Overflow - Convert excel column alphabet][so]

[so]:    http://stackoverflow.com/questions/9905533/convert-excel-column-alphabet-e-g-aa-to-number-e-g-25