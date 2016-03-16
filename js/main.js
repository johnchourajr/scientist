// -----------------------------
// Hide Header on on scroll down
// -----------------------------
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();
var navbar = $("nav");

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > (navbarHeight * 2.75)) {
    // Scroll Down
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

// ----------
// Min Header
// ----------
;(function($) {
  //caches a jQuery object containing the header element
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= navbarHeight) {
      navbar.removeClass('nav-max').addClass("nav-min");
    } else {
      navbar.removeClass("nav-min").addClass('nav-max');
    }
  });
})(jQuery);


// ---------------
// Animated scroll
// ---------------
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 400);
      return false;
    }
  }
});


// ---------------
// Scroll Mod
// ---------------
function Parallax() {
	var scrollPos = $(this).scrollTop();

  $('body').css({
    // 'background': "rgb("+(255)+","+(255)+","+(255-(scrollPos / 10))+")"
	});

  $('.upper').css({
    'opacity': (1-(scrollPos / 500))
  });

  $('.upper-2x').css({
    'opacity': (1-(scrollPos / 250))
  });

  $('.lower').css({
    'opacity': (0+(scrollPos / 500))
  });

  $('.color-change, .color-change * a').css({
    // 'color': "rgb("+(61+(scrollPos / 6))+","+(61+(scrollPos / 10))+","+(63+(scrollPos / 20))+")"
  });

}
$(document).ready(function(){
	$(window).scroll(function() {
		Parallax();
	});
});
