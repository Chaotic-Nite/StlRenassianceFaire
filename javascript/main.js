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

// Newsletter Email
var newsletter_submit = function () {
  otherSiteSelected = "0";
  if (jQuery("#tofTears").prop("checked")) {
    otherSiteSelected += "," + jQuery("#tofTears").val();
  }
  requestURL =
    "http://www.tunestub.com/embed/venues/renaissancefestmn/newsletter/dosignup.cfm" +
    "?email=" +
    jQuery("#email").val() +
    "&tofTears=" +
    otherSiteSelected;
  jQuery.ajax({
    type: "GET",
    cache: false,
    url: requestURL,
    dataType: "jsonp",
    success: function (result) {
      jQuery("#ts-newsletter-msg-holder").html(result.html);
    },
  });
  return false;
};

//Collapsibles
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
