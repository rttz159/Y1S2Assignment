//activate the login form and remove the signup form
function loginFormOpen() {
  let myLogInForm = document.getElementById("logInForm");
  let mySignUpForm = document.getElementById("signUpForm");
  let overlay = document.getElementById("overlay");

  mySignUpForm.classList.remove("display");
  mySignUpForm.classList.add("not-display");
  myLogInForm.classList.add("display");
  myLogInForm.classList.remove("not-display");
  overlay.classList.add("right");
  overlay.classList.remove("left");
}

//activate the signup form  and remove the login form
function signUpFormOpen() {
  let mySignUpForm = document.getElementById("signUpForm");
  let myLogInForm = document.getElementById("logInForm");
  let overlay = document.getElementById("overlay");

  mySignUpForm.classList.add("display");
  mySignUpForm.classList.remove("not-display");
  myLogInForm.classList.remove("display");
  myLogInForm.classList.add("not-display");
  overlay.classList.add("left");
  overlay.classList.remove("right");
}

//activate the login form and remove the signup form
function mobileLoginFormOpen() {
  let myLogIn = document.getElementById("logInForm").parentElement;
  let mySignUp = document.getElementById("signUpForm").parentElement;
  let mySignUpForm = document.getElementById("signUpForm");
  let myLogInForm = document.getElementById("logInForm");

  mySignUp.classList.remove("mobile-display");
  mySignUp.classList.add("mobile-display-none");
  myLogIn.classList.add("mobile-display");
  myLogIn.classList.remove("mobile-display-none");
  mySignUpForm.classList.remove("display");
  mySignUpForm.classList.add("not-display");
  myLogInForm.classList.add("display");
  myLogInForm.classList.remove("not-display");
}

//activate the signup form  and remove the login form
function mobileSignUpFormOpen() {
  let mySignUp = document.getElementById("signUpForm").parentElement;
  let myLogIn = document.getElementById("logInForm").parentElement;
  let mySignUpForm = document.getElementById("signUpForm");
  let myLogInForm = document.getElementById("logInForm");

  mySignUp.classList.add("mobile-display");
  mySignUp.classList.remove("mobile-display-none");
  myLogIn.classList.remove("mobile-display");
  myLogIn.classList.add("mobile-display-none");
  mySignUpForm.classList.add("display");
  mySignUpForm.classList.remove("not-display");
  myLogInForm.classList.remove("display");
  myLogInForm.classList.add("not-display");
}

//toggle password visibility
function toggleVisibility() {
  let myForm = document.getElementById("logInForm");
  let myForm1 = document.getElementById("signUpForm");
  let password = myForm.querySelector("div.password > input");
  let password1 = myForm1.querySelector("div.password > input");
  let img = myForm.querySelector("div.password > img");
  let img1 = myForm1.querySelector("div.password > img");

  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    img.setAttribute("src", "assets/images/commonIcon/iconEyeUnhide.png");
  } else {
    password.setAttribute("type", "password");
    img.setAttribute("src", "assets/images/commonIcon/iconEyeHide.png");
  }

  if (password1.getAttribute("type") == "password") {
    password1.setAttribute("type", "text");
    img1.setAttribute("src", "assets/images/commonIcon/iconEyeUnhide.png");
  } else {
    password1.setAttribute("type", "password");
    img1.setAttribute("src", "assets/images/commonIcon/iconEyeHide.png");
  }
}

//label animation
document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("focus", function () {
    item.previousElementSibling.className = "label-selected";
    if (item.validity.valid) {
      item.previousElementSibling.style.color = "rgb(104, 255, 58)";
    } else if (!item.validity.valid) {
      item.previousElementSibling.style.color = "rgb(255, 0, 0)";
    }
  });
  item.addEventListener("keyup", () => {
    if (item.validity.valid) {
      item.previousElementSibling.style.color = "rgb(104, 255, 58)";
    } else if (!item.validity.valid) {
      item.previousElementSibling.style.color = "rgb(255, 0, 0)";
    }
  });
  item.addEventListener("keydown", () => {
    if (item.validity.valid) {
      item.previousElementSibling.style.color = "rgb(104, 255, 58)";
    } else if (!item.validity.valid) {
      item.previousElementSibling.style.color = "rgb(255, 0, 0)";
    }
  });
  item.addEventListener("blur", function () {
    if (item.value === "") {
      item.previousElementSibling.className = "";
    }
    item.previousElementSibling.style.color = "white";
  });
});

//reset the login form whenever the window being resize
window.addEventListener("resize", () => {
  let myLogIn = document.getElementById("logInForm").parentElement;
  let mySignUp = document.getElementById("signUpForm").parentElement;
  let myLogInForm = document.getElementById("logInForm");
  let mySignUpForm = document.getElementById("signUpForm");
  let overlay = document.getElementById("overlay");

  mySignUp.classList.remove("mobile-display");
  mySignUp.classList.add("mobile-display-none");
  myLogIn.classList.add("mobile-display");
  myLogIn.classList.remove("mobile-display-none");
  mySignUpForm.classList.remove("display");
  mySignUpForm.classList.add("not-display");
  myLogInForm.classList.add("display");
  myLogInForm.classList.remove("not-display");
  overlay.classList.add("right");
  overlay.classList.remove("left");
});

//get the user input from sign up form and create a new user
function signUpFunction() {
  //create an user dictionary at user's local storage
  let userDict = {};
  let currentUser = {};
  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", "");
  } else {
    userDict = JSON.parse(localStorage.getItem("user"));
  }

  let myForm = document.getElementById("signUpForm");
  let email = myForm.querySelector("input[type=email]").value;
  let password = myForm.querySelector("div.password > input").value;
  let name = myForm.querySelectorAll("input[type=text]")[0].value;
  let ICNo = myForm.querySelectorAll("input[type=text]")[1].value;
  let ICValid = false;
  let nameValid = false;
  let passwordValid = false;
  let emailValid = false;

  if (ICNo.length == 14) {
    if (ICNo[6] == "-") {
      ICNo = ICNo.replace("-", "");
      ICNo = ICNo.replace("-", "");
    } else if (ICNo[6] == " ") {
      ICNo = ICNo.replace(" ", "");
      ICNo = ICNo.replace(" ", "");
    }
  }

  if (ICNo.length == 12 && ICNo != null) {
    ICValid = !isNaN(ICNo);
  }

  if (password.length >= 6 && password != null) {
    passwordValid = true;
  }

  if (name != null) {
    nameValid = true;
  }

  if (email.indexOf("@") != -1 && email.length > 0 && email != null) {
    emailValid = true;
  }

  if (ICValid && emailValid && passwordValid && nameValid) {
    let user = {
      name: name,
      password: password,
      IC: ICNo,
    };
    currentUser = {
      name: name,
      IC: ICNo,
      gender: ICNo[-1] % 2 == 0 ? "Female" : "Male",
    };
    userDict[email] = user;
    localStorage.setItem("user", JSON.stringify(userDict));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    alert("Account created successfully.\nWelcome " + name + ".");
    return true;
  } else {
    let alertmsg = "";
    if (!ICValid) {
      alertmsg += "\nInvalid IC Number.";
    }
    if (!passwordValid) {
      alertmsg += "\nInvalid Password.";
    }
    if (!nameValid) {
      alertmsg += "\nInvalid Name.";
    }
    if (!emailValid) {
      alertmsg += "\nInvalid Email.";
    }
    alert(alertmsg);
    return false;
  }
}

//validate the user's email and password to authenticate the user's access
function logInFunction() {
  let currentUser = {};
  //create an user dictionary at user's local storage
  let userDict = {};
  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", "");
  } else {
    userDict = JSON.parse(localStorage.getItem("user"));
  }

  let myForm = document.getElementById("logInForm");
  let inputEmail = myForm.querySelector("input[type=email]").value;
  let inputPassword = myForm.querySelector("div.password > input").value;
  let passwordValid = false;
  let emailValid = false;

  if (inputPassword.length >= 6 && inputPassword != null) {
    passwordValid = true;
  }

  if (
    inputEmail.indexOf("@") != -1 &&
    inputEmail.length > 0 &&
    inputEmail != null
  ) {
    emailValid = true;
  }

  if (emailValid && passwordValid) {
    if (userDict.hasOwnProperty(inputEmail)) {
      if (userDict[inputEmail]["password"] == inputPassword) {
        let welcomeMsg =
          "Welcome " +
          userDict[inputEmail]["name"] +
          ". Log In Successfully.\nYou will be directed back to home page.";

        currentUser = {
          name: userDict[inputEmail]["name"],
          IC: userDict[inputEmail]["IC"],
          gender: userDict[inputEmail]["IC"][-1] % 2 == 0 ? "Female" : "Male",
        };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        alert(welcomeMsg);
        window.location.href = "index.html";
        return true;
      } else {
        alert("Incorrect Password");
        return false;
      }
    } else {
      alert("Account is not existed");
      return false;
    }
  } else {
    let alertmsg = "";
    if (!emailValid) {
      alertmsg += "\nInvalid Email.";
    }
    if (!passwordValid) {
      alertmsg += "\nInvalid Password.";
    }
    alert(alertmsg);
    return false;
  }
}
