const bubbleLinks = document.querySelectorAll('.bubble-link');

bubbleLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#e0e0e0';
  });

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = '#f2f2f2';
  });
});