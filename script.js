const slideshows = document.querySelectorAll('.carousel-slide');
const totalSlideshows = slideshows.length;
let slideIndexes = [0, 0];

function showSlide(slideshowIndex, n) {
  slideIndexes[slideshowIndex] = (slideIndexes[slideshowIndex] + n + slideshows[slideshowIndex].children.length) % slideshows[slideshowIndex].children.length;
  const slides = slideshows[slideshowIndex].children;
  Array.from(slides).forEach(slide => slide.style.display = 'none');
  slides[slideIndexes[slideshowIndex]].style.display = 'block';
  slides[slideIndexes[slideshowIndex]].style.opacity = 0;
  fadeIn(slides[slideIndexes[slideshowIndex]]);
}

function fadeIn(element) {
  let opacity = 0;
  const interval = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(interval);
    } else {
      opacity += 0.1;
      element.style.opacity = opacity;
    }
  }, 100);
}

function moveSlide(slideshowIndex, n) {
  showSlide(slideshowIndex, n);
}

function autoSlideshow() {
  moveSlide(0, 1);
  moveSlide(1, 1);
}

setInterval(autoSlideshow, 5000);


