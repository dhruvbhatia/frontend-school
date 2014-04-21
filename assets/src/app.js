window.onload = function() {

  // initiate foundation
  $( document ).foundation();

  // register solution js functions so users can use them in chrome dev tools/firebug
  $.globalEval($('#solution').nextAll('.language-javascript').text());
  $( "<div data-alert class='alert-box success radius'>Try it in your console! The <strong>following function</strong> has been loaded on this page.<a href='#'' class='close'>&times;</a></div>" ).insertBefore( $('#solution').nextAll('.language-javascript') );

};