// =====================================================
// PRODUCT PAGE — Image gallery / thumbnail switcher
// File: js/product.js
// =====================================================

const mainImg   = document.getElementById('galleryMainImg');
const thumbs    = document.querySelectorAll('.thumb');
const thumbNext = document.getElementById('thumbNext');

// Track current index
let currentIndex = 0;

function switchToImage(index) {
  // Clamp index within bounds
  currentIndex = (index + thumbs.length) % thumbs.length;

  // Find the <img> inside the clicked thumb and get its src
  const thumbImg = thumbs[currentIndex].querySelector('img');
  if (mainImg && thumbImg) {
    mainImg.src = thumbImg.src;
    mainImg.alt = thumbImg.alt;
  }

  // Update active state on thumbnails
  thumbs.forEach((t, i) => {
    t.classList.toggle('active', i === currentIndex);
  });
}

// Click a thumbnail → switch main image
thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => switchToImage(i));
});

// Arrow → cycle to next image
if (thumbNext) {
  thumbNext.addEventListener('click', () => {
    switchToImage(currentIndex + 1);
  });
}