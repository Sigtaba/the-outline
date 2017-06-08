$(document).ready(function() {
  // Side nav
  $(".burger-time").sideNav();

  //Magical disappearing logo
  $(window).scroll(function(){
      if($(this).scrollTop() > 1) {
          // $('.top-section, #logo').fadeOut('slow');
          $('#logo')
              // .css({'width':'184px','height':'33px'})
              .attr('src','img/logo/blank.png');
      }
      if($(this).scrollTop() < 1) {
          // $('#logo, #topbar, .cart-label').fadeIn('fast');
          $('#logo')
              // .css({'width':'184px','height':'60px'})
              .attr('src','img/logo/logo-white.svg');
      }
    });
  });
