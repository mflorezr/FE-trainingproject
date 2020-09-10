import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'svgxuse';

var toggleButton = document.querySelector('.toggle-but');
var testimonial = document.querySelector('.first-testimonial');
var nav = document.querySelector('.nav-bar');
var questions = document.querySelectorAll('.question');
const buttonLink = document.querySelectorAll('.nav-bar-items li');
const section = ['#carrousel-images', '#services', '#about', '#team-members', '#portafolio',
  '#blog', '#asked-questions', '#testimonial', '#contact'
];
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: "100%"
  }
});

window.firstSlide = () => {
  if (($(testimonial).is(' :hidden'))) {
    showSlides(6);
  } else {
    showSlides(1);
  }
}

window.currentSlide = (slideIndex) => {
  showSlides(slideIndex);
}

window.showSlides = (slideIndex) => {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');
  slides.forEach(slide => {
    if (slide.classList.contains('active-slide')) {
      slide.classList.remove('active-slide');
    }
  });
  dots.forEach(dot => {
    if (dot.classList.contains('active')) {
      dot.classList.remove('active');
    }
  });
  slides[slideIndex - 1].classList.add('active-slide');
  dots[slideIndex - 1].classList.add('active');
}

window.dropDown = (element) => {
  closeAll();
  var text = element.childNodes[3];
  if ($(text).is(':visible')) {
    $(text).slideUp();
  } else {
    $(text).slideDown();
  }
}

window.closeAll = () => {
  questions.forEach(element => {
    var text = element.querySelector('.question-answer');
    $(text).slideUp();
  });
}

window.toggleClick = () => {
  if ($(nav).is(':visible')) {
    $(nav).slideUp();
  } else {
    $(nav).slideDown();
  }
}

window.navClick = () => {
  if ($(nav).is(':visible')) {
    $(nav).slideUp();
  }
}

window.closeToggle = () => {
  if (!($(toggleButton).is(' :hidden'))) {
    if ($(nav).is(':visible')) {
      $(nav).slideUp();
    }
  }
}

window.currentSection = () => {
  let jButtonLink = 0;
  let iSection = 0;
  for (iSection = 0; iSection < section.length; iSection++) {
    if (section[iSection] === '#asked-questions' || section[iSection] === '#testimonial') {
      jButtonLink = 5;
    }
    new ScrollMagic.Scene({
        triggerElement: section[iSection]
      })
      .setClassToggle('#' + buttonLink[jButtonLink].id, 'active-link') 
      .addTo(controller);
    jButtonLink++;
  }
}

currentSection();
firstSlide();
closeAll();
