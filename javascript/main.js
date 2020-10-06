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

let photoIndex = 1;

showPhotos(photoIndex);

function imageSlides(num) {
  showPhotos((photoIndex += num));
}

function currentSlide(num) {
  showPhotos((photoIndex = num));
}

function showPhotos(num) {
  let slides = document.getElementsByClassName("photo-slides");
  if (num > slides.length) {
    photoIndex = 1;
  }
  if (num < 1) {
    photoIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[photoIndex - 1].style.display = "block";
}
