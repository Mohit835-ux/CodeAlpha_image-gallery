let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item');

function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  currentImageIndex = [...images].indexOf(imgElement);
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(step) {
  currentImageIndex = (currentImageIndex + step + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

  <script src="codealpha.js"></script>
</body>
</html>
