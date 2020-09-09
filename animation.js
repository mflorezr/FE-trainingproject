var toggleButton = document.querySelector(".toggle-but");
var testimonial = document.querySelector(".first-testimonial");
var nav = document.querySelector(".nav-bar");
var questions = document.querySelectorAll(".question");
var main = document.querySelector("main");
const buttonLink = document.querySelectorAll(".nav-bar-items li");
const section = ["#carrousel-images", "#services", "#about", "#team-members", "#portafolio",
  "#blog", "#asked-questions", "#testimonial", "#contact"
];
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: "100%"
  }
});

currentSection();
firstSlide();

function firstSlide() {
  if (($(testimonial).is(" :hidden"))) {
    showSlides(6);
  } else {
    showSlides(1);
  }
}

function currentSection() {
  let j = 0;
  let i = 0;
  for (i = 0; i < section.length; i++) {
    if (section[i] === '#asked-questions' || section[i] === '#testimonial') {
      j = 5;
    }
    new ScrollMagic.Scene({
        triggerElement: section[i]
      })
      .setClassToggle('#' + buttonLink[j].id, "active-link") // add class toggle
      .addTo(controller);
    j++;
  }
}

function currentSlide(slideIndex) {
  showSlides(slideIndex);
}

// Allows to fade the slide of testimonial words
function showSlides(slideIndex) {
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  slides.forEach(slide => {
    if (slide.classList.contains("active-slide")) {
      slide.classList.remove("active-slide");
    }
  });
  dots.forEach(dot => {
    if (dot.classList.contains("active")) {
      dot.classList.remove("active");
    }
  });
  slides[slideIndex - 1].classList.add("active-slide");
  dots[slideIndex - 1].classList.add("active");
}

closeAll();

function dropDown(element) {
  closeAll();
  var text = element.childNodes[3];
  if ($(text).is(':visible')) {
    $(text).slideUp();
  } else {
    $(text).slideDown();
  }
}

// Close all asked questions before drop down the next question
function closeAll() {
  questions.forEach(element => {
    var text = element.querySelector(".question-answer");
    $(text).slideUp();
  });
};

// Drop down the page main menu when toggle button is clicked(mobile version)
toggleButton.addEventListener("click", function () {
  if ($(nav).is(':visible')) {
    $(nav).slideUp();
  } else {
    $(nav).slideDown();
  }
});

// Drop down the page main menu when toggle button is clicked(mobile version)
nav.addEventListener("click", function () {
  if ($(nav).is(':visible')) {
    $(nav).slideUp();
  }
});

//Close page main menu when you click outside
main.addEventListener("click", function () {
  if (!($(toggleButton).is(" :hidden"))) {
    if ($(nav).is(':visible')) {
      $(nav).slideUp();
    }
  }
});