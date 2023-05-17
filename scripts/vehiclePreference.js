const myVideo = document.getElementById("promote");
const videoBtn = document.getElementById("overlayBtn");
const overlay = document.querySelector(
  "body main > section > div.video > div.overlay"
);
const mainContent = document.querySelector(
  "body main > section > section.main_content"
);
videoBtn.addEventListener("click", () => {
  overlay.classList.add("disappear");
  overlay.classList.remove("appear");
  setTimeout(() => {
    myVideo.play();
  }, 500);
});

myVideo.addEventListener("ended", () => {
  overlay.classList.add("appear");
  overlay.classList.remove("disappear");
  mainContent.scrollIntoView({
    behavior: "smooth",
  });
});

const nxtBTN = document.querySelectorAll(
  "body main > section > section.main_content > div.questions button.next"
);

const questionBox = document.querySelectorAll(
  "body main > section > section.main_content > div.questions > div"
);

const prevBTN = document.querySelectorAll(
  "body main > section > section.main_content > div.questions button.prev"
);

nxtBTN[0].addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    questionBox[i].style.transform = "translateX(0vw)";
  }
});

nxtBTN[1].addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    questionBox[i].style.transform = "translateX(-100vw)";
  }
  document.getElementById("done").style.animation = "fadein 1.5s ease forwards";
});

nxtBTN[2].style.visibility = "hidden";

prevBTN[0].style.visibility = "hidden";

prevBTN[1].addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    questionBox[i].style.transform = "translateX(100vw)";
  }
});

prevBTN[2].addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    questionBox[i].style.transform = "translateX(0vw)";
  }
});

document.getElementById("openQuestion").addEventListener("click", () => {
  document.querySelector(
    "body main > section > section.main_content > div.questions "
  ).style.opacity = "1";
  document.querySelector(
    "body main > section > section.main_content > div.questions "
  ).style.transform = "translateY(0)";
});

document.getElementById("done").addEventListener("click", () => {
  document.querySelector(
    "body main > section > section.main_content > div.questions "
  ).style.opacity = "0";
  document.querySelector(
    "body main > section > section.main_content > div.questions "
  ).style.transform = "translateY(35em)";
  document
    .querySelector("body main > section > section.result")
    .scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    for (i = 0; i < 3; i++) {
      questionBox[i].style.transform = "translateX(100vw)";
    }
  }, 3000);

  var brand = 0;
  var link = 0;
  var img = 0;

  function valueReturn() {
    const radioBtn = document.querySelectorAll(
      "body main > section > section.main_content > div.questions div input[type='radio']:checked"
    );
    switch (radioBtn[0].value + radioBtn[1].value + radioBtn[2].value) {
      case "yesyesyes":
        return "Merc-Benz";
        break;
      case "yesyesno":
        return "Tesla";
        break;
      case "yesnono":
        return "Tesla";
        break;
      case "nonono":
        return "Merc-Benz";
        break;
      case "noyesno":
        return "Merc-Benz";
        break;
      case "nonoyes":
        return "Bugatti";
        break;
      case "noyesyes":
        return "Merc-Benz";
        break;
      case "yesnoyes":
        return "Tesla";
        break;
    }
  }

  brand = valueReturn();

  switch (brand) {
    case "Tesla":
      link = "model.html#tesla";
      img = "../assets/images/vehicleRecommendation/teslaBlack.jpg";
      break;
    case "Merc-Benz":
      link = "model.html#merc";
      img = "../assets/images/vehicleRecommendation/mercedesFront.jpg";
      break;
    case "Bugatti":
      link = "model.html#bugatti";
      img = "../assets/images/vehicleRecommendation/bugattiBlue.jpg";
      break;
  }

  var header2Html = document.getElementById("targetH2");
  const imgHtml = document.getElementById("targetImg");
  const linkHtml = document.getElementById("targetA");

  header2Html.innerHTML = brand + " will be a good choice for you";
  imgHtml.getAttributeNode("src").value = img;
  linkHtml.getAttributeNode("href").value = link;
});
