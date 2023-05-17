//Carousel Gallery
const carouselItems = document.querySelectorAll("div.carousel-section");
var carouselCounter = 0;
function showCarouselItems(x) {
  for (i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.remove("active");
  }
  carouselItems[carouselCounter].classList.add("active");
  if (x) {
    if (carouselItems[carouselCounter].classList.contains("right")) {
      carouselItems[carouselCounter].classList.remove("right");
    }
    carouselItems[carouselCounter].classList.add("left");
  } else if (x == false) {
    if (carouselItems[carouselCounter].classList.contains("left")) {
      carouselItems[carouselCounter].classList.remove("left");
    }
    carouselItems[carouselCounter].classList.add("right");
  }
}

function prevCarouselItem() {
  carouselCounter--;
  if (carouselCounter < 0) {
    carouselCounter = carouselItems.length - 1;
  }
  showCarouselItems(true);
  clearInterval(autoSlide);
}

function nextCarouselItem() {
  carouselCounter++;
  if (carouselCounter > carouselItems.length - 1) {
    carouselCounter = 0;
  }
  showCarouselItems(false);
  clearInterval(autoSlide);
}

showCarouselItems();

var delay = 0;
var autoSlide = setTimeout(
  setInterval(() => {
    nextCarouselItem();
  }, 4000),
  delay
);

const buttons = document.querySelectorAll(".buttons>button");
function addAutoSlide(x) {
  if (buttons[0].contains(x.target) || buttons[1].contains(x.target)) {
    delay = 4000;
  } else {
    delay = 0;
  }
}

document.addEventListener("click", addAutoSlide(this));
