

(function($){
  'use strict'


    // body background color
    var bodybackground = $('body').css('background-color');

    // add an anchor to every section
    $('h3').each(function(){
      var anchor = $(this).html().toLowerCase();
      $(this).attr('id', anchor);
      $(this).append('<span><a class="scrolltop">Nach oben</a></span>');
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


    // list bullet-points color
    $('.content ul li').prepend('<span>');
    $('.content ul li span').css('background-color',bodybackground);

    // hr color
    $('.post-content hr').css('background-color',bodybackground);

    // link color
    $('.post-content a').css('color',bodybackground);


})(jQuery);

