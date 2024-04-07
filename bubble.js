const bubbleLinks = document.querySelectorAll('.bubble-link');
const bubbleLinksContainer = document.querySelector('.bubble-links-container');
const numLinks = bubbleLinks.length;
const numVisible = 5; // Number of links to show at a time
let index = 0;

// Event listeners for hover effect on bubble links
bubbleLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#e0e0e0';
  });

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = '#f2f2f2';
  });
});

function bubbleshowSlide() {
  const offset = (index * (100 / numVisible));
  bubbleLinksContainer.style.transform = `translateX(-${offset}%)`;
  bubbleLinksContainer.style.transition = 'transform 0.5s ease-in-out';
}

function cycleBubbleLinks() {
  index = (index + 1) % (numLinks - numVisible + 1);
  bubbleshowSlide();
}

document.getElementById('prevButton').addEventListener('click', () => {
  index = (index - 1 + (numLinks - numVisible + 1)) % (numLinks - numVisible + 1);
  bubbleshowSlide();
});

document.getElementById('nextButton').addEventListener('click', () => {
  index = (index + 1) % (numLinks - numVisible + 1);
  bubbleshowSlide();
});

bubbleshowSlide();