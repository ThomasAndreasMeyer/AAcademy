
  "use strict";

// Event Listener, um zu warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
  
  // Parallax-Image-Code
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      $('.parallax').css('background-position', 'center ' + scrollTop / 2 + 'px');
    });
  });

});