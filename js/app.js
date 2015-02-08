

(function($){
  'use strict'


  // add an anchor to every section
  $('h3').each(function(){
    var anchor = $(this).html().toLowerCase();
    $(this).attr('id', anchor);
    $(this).append('<span><a class="scrolltop">Back to top</a></span>');
  });

  // smooth scroll top
  $('.scrolltop').on('click',function(){
      $('html, body').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  
  // smooth scroll to anchor
  $('.sub-menu a').on('click',function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });



})(jQuery);

