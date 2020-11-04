// Sponsor Sliders
$(document).ready(function () {
  $(".sponsor-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// Photo Slides
var photoIndex = Math.floor(Math.random() * (3 - 0) + 0);
let photoSlides = document.getElementsByClassName("photo-slides");

showPhotos(photoIndex);
photoCarousel();

function imageSlides(num) {
  showPhotos((photoIndex += num));
}

function currentSlide(num) {
  showPhotos((photoIndex = num));
}

function showPhotos(num) {
  if (num > photoSlides.length) {
    photoIndex = 1;
  }
  if (num < 1) {
    photoIndex = photoSlides.length;
  }
  for (let i = 0; i < photoSlides.length; i++) {
    photoSlides[i].style.display = "none";
  }
  photoSlides[photoIndex - 1].style.display = "block";
}

function photoCarousel() {
  for (let i = 0; i < photoSlides.length; i++) {
    photoSlides[i].style.display = "none";
  }
  photoIndex++;
  if (photoIndex > photoSlides.length) {
    photoIndex = 1;
  }
  photoSlides[photoIndex - 1].style.display = "block";
  setTimeout(photoCarousel, 8000);
}
