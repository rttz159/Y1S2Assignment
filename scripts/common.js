//trigger Dropdown Menu 1
function dropDown1() {
  const menu = document.querySelectorAll(
    ".grid-container > header > nav > ul > span > li.not-hidden > ul"
  )[0];

  menu.classList.add("dropDown");
}

//trigger Dropdown Menu 2
function dropDown2() {
  const menu = document.querySelectorAll(
    ".grid-container > header > nav > ul > span > li.not-hidden > ul"
  )[1];

  menu.classList.add("dropDown");
}

//close Dropdown Menu
let timeoutId1;
let timeoutId2;

function hideDropdownMenu1() {
  timeoutId1 = setTimeout(() => {
    document
      .querySelectorAll(
        ".grid-container > header > nav > ul > span > li.not-hidden > ul"
      )[0]
      .classList.remove("dropDown");
  }, 400);
}

function hideDropdownMenu2() {
  timeoutId2 = setTimeout(() => {
    document
      .querySelectorAll(
        ".grid-container > header > nav > ul > span > li.not-hidden > ul"
      )[1]
      .classList.remove("dropDown");
  }, 400);
}

function cancelHideDropdownMenu1() {
  clearTimeout(timeoutId1);
}

function cancelHideDropdownMenu2() {
  clearTimeout(timeoutId2);
}

//allow the animation of the hamburger menu icon and dropdown of the hamburger menu
function toggleIcon(x) {
  const hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];
  x.classList.toggle("change");
  hamburgerMenu.classList.toggle("show");
}

//dropdown and close the search menu
function searchMenuShow(x) {
  const searchMenu = document.querySelector("main > .searchMenu");
  const warningText = document.getElementById("warning");
  var numberOfLi = 0;
  var filter = x.value.toUpperCase();
  var ul = document.getElementById("searchUL");
  var li = ul.getElementsByTagName("li");
  var txtValue, a;

  //filter the list
  for (i = 1; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      numberOfLi++;
    } else {
      li[i].style.display = "none";
    }
  }

  if (numberOfLi == 0) {
    warningText.style.display = "";
  } else {
    warningText.style.display = "none";
  }

  searchMenu.classList.add("show");
  document.querySelector(".grid-container main").classList.add("showOverlay");
}

//to close the list when user is searching
function listDisplayNone() {
  const menuList = document.querySelectorAll(
    ".grid-container > header > nav > ul > .hamburgerMenu > li"
  );

  if (window.innerWidth <= "940") {
    for (i = 1; i < menuList.length; i++) {
      menuList[i].style.display = "none";
    }
  }
}

//to reopen the list when user is searching
function listDisplay() {
  const menuList = document.querySelectorAll(
    ".grid-container > header > nav > ul > .hamburgerMenu > li"
  );

  if (window.innerWidth <= "940") {
    for (i = 1; i < menuList.length; i++) {
      menuList[i].style.display = "";
    }
  }
}

//close the menu by clicking on the button
function searchMenuClose() {
  const searchBar = document.querySelector(".hamburgerMenu .hidden > input");
  const searchMenu = document.querySelector("main > .searchMenu");

  searchMenu.classList.remove("show");
  document
    .querySelector(".grid-container main")
    .classList.remove("showOverlay");
}

//close the menu when user clicked outside the menu
const searchMenu = document.getElementById("searchUL");
const searchMenuSection = document.querySelector("main > .searchMenu");

document.addEventListener("click", (event) => {
  if (!searchMenu.contains(event.target)) {
    searchMenuClose();
  }
});

function chatbot() {
  document.getElementById("chatBot").classList.toggle("show");
  document.getElementById("chatBotAudio").play();
}
