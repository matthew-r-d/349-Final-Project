let slideIndex = 1;

slideShow(slideIndex); //call the function below

function slideShow(n) {
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // for showing current slide
  slides[slideIndex - 1].classList.add("active");
}

// next and previous buttons
function plusSlides(n) {
  slideShow(slideIndex += n);
}
