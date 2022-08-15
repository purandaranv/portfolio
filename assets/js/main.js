/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

		
})(jQuery);


var typed = new Typed(".typing", {
	strings: ["Developer", "Team Leader", "Sustainer", "Fitness Enthusiast", "Reader","Father","Scrum Master"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

//guk 
var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hiddenskill');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().bottom;

	  //console.log(positionFromTop+"  "+windowHeight);
      if (positionFromTop - windowHeight <= 0) {
        //element.classList.add('fade-in-element');
        element.classList.remove('hiddenskill');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();