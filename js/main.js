$(document).ready(function() {
  
  var owl = $(".slider");
      

  $(".slider").owlCarousel({
    items : 3,
    singleItem: true,
    lazyLoad : true,
    navigation : false,
    addClassActive: true,
    afterAction : afterAction
  }); 

  
    function afterAction(){
      var current = this.owl.currentItem;
         if (current == 0) {
                $('.latest-work').css("background", "#42c1b0");
         } else if (current == 1) {
                $('.latest-work').css("background", "#0571aa");
         } else  {
                $('.latest-work').css("background", "#ee8433");
         }
      }
      
  // Menu trigger
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