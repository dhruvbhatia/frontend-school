window.onload = function() {

  // initiate foundation
  $( document ).foundation();

  // register solution js functions so users can use them in chrome dev tools/firebug
  $.globalEval($('#solution').nextAll('.language-javascript').text());

};