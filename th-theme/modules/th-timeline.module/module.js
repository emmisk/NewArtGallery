const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const images = document.querySelectorAll('.timeline_image');
const modalImg = document.getElementById("modalImg");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

  document.addEventListener('keydown', function(event) {
    const modalImg = document.getElementById("modalImg");
    // Check if the key pressed is "Enter"
        if (event.key === 'Enter') {
        modal.style.display = "block";
        modalImg.src = event.target.querySelector('img').src
      }
  });

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Close the modal when the user clicks on <span> (x)
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal || event.target == modalImg) {
    modal.style.display = "none";
  }
}
