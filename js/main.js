$(document).ready(function() {
  
  var stickyHeaderTop = $('#nav-bar').offset().top;
 
  var add = 0;
  $(window).scroll(function(){
          if( $(window).scrollTop() > stickyHeaderTop ) {
                  $('#nav-bar').css({position: 'fixed', top: '0px'});
                  $('#stickyalias').css('display', 'block');
                  add = 60;
          } else {
                  $('#nav-bar').css({position: 'static', top: '0px'});
                  $('#stickyalias').css('display', 'none');
                  add = 0;
          }
  });

  $(document).ready(function(){
    $('.portfolio-container').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {          
          if ($(document).scrollTop() > $('#header').height()) {
            // add = $('#nav-bar').height();
            console.log($(document).scrollTop());
            $('html, body').animate({
              scrollTop: target.offset().top - 40
              }, 600);
          } else {
            $('html, body').animate({
              scrollTop: target.offset().top - 100
            }, 600);
          }
          // console.log(target.offset().top);
          
          return false;
        }
      }
    });
  });
      
  var $item = $('#header .carousel .item'); 
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight); 
  $item.addClass('full-screen');

  $('#header .carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  $('.carousel').carousel({
    interval: 10000,
    pause: "false"
  });

  $('.flipper-container').height($('.flip .face.front').height());
  $('.flipControl').on('click', function(){
    $(this).closest('.card').toggleClass('flipped');
    if ($('.card').hasClass('flipped')) {
      $('.flipper-container').height($('.flip .face.back').height());
      console.log('here');
      console.log($('.flip .face.back').height());
    } else {
      $('.flipper-container').height($('.flip .face.front').height());
      console.log('there');
      console.log($('.flip .face.front').height());
    }
    
  });

});