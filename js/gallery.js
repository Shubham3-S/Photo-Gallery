const galleryImages = document.querySelectorAll("#gallery li img");
const largeImage = document.querySelector("#gallery figure img");
const figcaption = document.querySelector("#gallery figcaption");

// Function to update large image and caption
function updateGallery(image) {
  const imageName = image.src.split('/').pop().replace('-small.jpg', '-large.jpg'); // Extract image name
  const imagePath = 'images/' + imageName; // Construct image path

  largeImage.src = imagePath;
  figcaption.textContent = imageName.replace('-large.jpg', ''); // Set caption
}

// Event listeners for thumbnails
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    updateGallery(image);
  });
});

// Set initial image
updateGallery(galleryImages[0]);