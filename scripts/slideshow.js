/** Scripts.js **/

$( document ).ready(function() {

	// Create JS Object literal to make sure you dont polute the jQuery namespace and over-ride things
	/* Create a new object: 
		var testObject {
			// can assign properties or functions within here:
			testObject.name = "Graeme test object name";
			insideFunction: function() {
				alert(testObject.name);
			}
		}

		To call function you reference it through the specific namespace (object) like so:
		testObject.insideFunction();
	*/  
	slideGallery.slideShow(1);
	rotateGallery.rotatePics(2);
});



// Slideshow function 
	var slideGallery = {
		slideShow: function() {
			var current = $('#photosSlide .show');
			var next = current.next().length ? current.next() : 
			// The " ? " is a TERNARY OPERATOR, its a shortcut for setting a variable conditionally. 
			// E.g: The syntax a ? b : c means if a is TRUE return b otherwise return c
			current.siblings().first();
			current.hide().removeClass('show');
			next.fadeIn().addClass('show');

			setTimeout(slideGallery.slideShow, 3000);
		}
	};


// Rotating Images function 
	var rotateGallery = {
		rotatePics: function(currentPhoto) {
			var numberOfPhotos = $('#photosRotate img').length;
			currentPhoto = currentPhoto % numberOfPhotos;

			$('#photosRotate img').eq(currentPhoto).fadeOut(function() {
				// re-order the z-index
				$('#photosRotate img').each(function(i) {
				$(this).css(
					'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
				);
			});
			 
			$(this).fadeIn(); 
				setTimeout(function() {
					rotateGallery.rotatePics(++currentPhoto);
				}, 4000);
			});
		}
	};


