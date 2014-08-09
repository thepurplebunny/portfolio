(function(){

  var defaultProject = 'portfolio';

  var mainContainer = $('#portfolio');

  var hash = function(){
    return window.location.hash.substr(1) || defaultProject;
  }

  var loadProject = function(){
    mainContainer.load('projects/'+hash()+'.html');
  }

  $(window).on('hashchange',function(){
    loadProject();
  })

  loadProject();


  var owl = $(".slider");


  $(".slider").owlCarousel({
    items : 3,
    singleItem: true,
    lazyLoad : true,
    navigation : true,
    addClassActive: true,
    slideSpeed: 500,
    afterAction : afterAction
  }); 


  function afterAction(){
    var current = this.owl.currentItem;
    if (current == 0) {
      $('.latest-work').css("background", "#f9961e");
    } else if (current == 1) {
      $('.latest-work').css("background", "#0571aa");
    } else if (current == 2) {
      $('.latest-work').css("background", "#acbe26");
    } else  {
      $('.latest-work').css("background", "#42c1b0");
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


    // Dribbble

    var callback = function (playerShots) {
      var html = '';

      

      $.each(playerShots.shots, function (i, shot) {
        html += '<li>';
        html += '<a href="' + shot.url + '" target="_blank">';
        html += '<img src="' + shot.image_url + '" ';
        html += 'alt="' + shot.title + '"></a></li>';
      });

      $('#dribbble').html(html);
    };

    $.jribbble.getShotsByPlayerId('thepurplebunny', callback, {page: 1, per_page: 6});





    
  }())