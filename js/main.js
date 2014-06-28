$(document).ready(function() {
 
  $(".slider").owlCarousel({
    items : 3,
    singleItem: true,
    lazyLoad : true,
    navigation : false
  }); 
 
  $(".menu-trigger").click(function(event) {
  	$("nav").toggleClass('show');
    $("main, section, footer").toggleClass('no-scroll').toggleClass('hide');;
  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});