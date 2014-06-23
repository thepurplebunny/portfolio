$(document).ready(function() {
 
  $(".slider").owlCarousel({
    items : 3,
    singleItem: true,
    lazyLoad : true,
    navigation : false
  }); 
 
  $(".menu-trigger").click(function(event) {
  	$("nav").toggleClass('show').removeClass('hidden');
  });


});