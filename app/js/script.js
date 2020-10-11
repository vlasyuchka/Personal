
$(document).ready(function(){
	$(function() {
	var head = 60; 
	var noth = 0;             
	$(function(){
	    var mnu = $('#top-nav');
	    var top = $(this).scrollTop();
	    if(top > head){
	        mnu.css('top', noth);
	        mnu.addClass('fixed');
	    }                
	    $(window).scroll(function(){
	        top = $(this).scrollTop();         
	        if (top+noth < head) {
	            mnu.css('top', (noth));
	            mnu.removeClass('fixed');
	        } else {
	            mnu.css('top', noth);
	            mnu.addClass('fixed');
	        }
	    }); 
	});
	});

 $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#top-nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
  $(".scroll-down a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

});
