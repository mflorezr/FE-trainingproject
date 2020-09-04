var toggleButton = document.querySelector(".toggle-but");
var testimonial = document.querySelector(".testimonial-1");
var nav = document.querySelector(".nav-bar");
var questions = document.querySelectorAll(".question");
var main = document.querySelector("main");
var slideIndex = 1;


//Show the first testimonial slider of every device
if(($(testimonial).is(" :hidden"))){
    showSlides(slideIndex=6);
}
else{
    showSlides(slideIndex=1);
}


// Allows to change font color of nav-bar items depending of the page section
var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: "100%" } });

new ScrollMagic.Scene({ triggerElement: "#carrousel-images" })
    .setClassToggle("#home-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#services" })
    .setClassToggle("#services-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#about" })
    .setClassToggle("#about-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#team-members" })
    .setClassToggle("#team-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#portafolio" })
    .setClassToggle("#portafolio-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#blog" })
    .setClassToggle("#blog-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#asked-questions" })
    .setClassToggle("#blog-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#testimonial" })
    .setClassToggle("#blog-link", "active-link") // add class toggle
    .addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#contact" })
    .setClassToggle("#contact-link", "active-link") // add class toggle
    .addTo(controller);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Allows to fade the slide of testimonial words
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  
  dots[slideIndex-1].className += " active";
}


closeAll();

//Allows to slideup and slideup asked questions after click on them
questions.forEach(element => {
    element.addEventListener("click", function(){
        closeAll();
        var text = element.childNodes[3];
        if ($(text).is(':visible')){
            $(text).slideUp();
        } else{
            $(text).slideDown();
        }
    });
});

// Close all asked questions before drop down the next question
function closeAll(){
    questions.forEach(element => {
        var text = element.querySelector(".question-answer");
        $(text).slideUp();
    });
};

// Drop down the page main menu when toggle button is clicked(mobile version)
toggleButton.addEventListener("click", function() {
    if ($(nav).is(':visible')){
        $(nav).slideUp();
    } else{
        $(nav).slideDown();
    }
});

// Drop down the page main menu when toggle button is clicked(mobile version)
nav.addEventListener("click", function() {
    if ($(nav).is(':visible')){
        $(nav).slideUp();
    } 
});

//Close page main menu when you click outside
main.addEventListener("click", function() {
    if(!($(toggleButton).is(" :hidden"))){
    if ($(nav).is(':visible')){
        $(nav).slideUp();
    } 
}
});






 