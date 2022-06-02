const text1 = document.querySelector(".slide-left");
const text2 = document.querySelector(".slide-right");
const textArray1 = ["Hi, My name is", "I'm a French", "Welcome to"];
const textArray2 = ["Warren Gérard", "Developer", "my portfolio"];
let i = 0;
let j = 0;

// change the text from the home page after each "slide" animation
  // top text
text1 &&
  setInterval(() => {
    if (i < textArray1.length - 1) {
      i++;
    } else {
      i = 0;
    }
    text1.innerHTML = textArray1[i];
  }, 10000);
  // bottom text 
text2 &&
  setInterval(() => {
    if (j < textArray2.length - 1) {
      j++;
    } else {
      j = 0;
    }
    text2.innerHTML = textArray2[j];
  }, 10000);

const info = document.querySelectorAll(".projects-info");
const textBlock = document.querySelectorAll(".text-block");
const crossTextBlock = document.querySelectorAll(".close-text-block");

// show or hide the descriptions from the projects with the "info" button
for (let k = 0; k < info.length; k++) {
  info[k].addEventListener("click", () => {
    if (textBlock[k].style.display !== "block") {
      textBlock[k].style.display = "block";
    } else textBlock[k].style.display = "none";
  });
}
// remove the descriptions when you click on the cross
for (let l = 0; l < textBlock.length; l++) {
  crossTextBlock[l].addEventListener("click", () => {
    textBlock[l].style.display = "none";
  });
}


const logo = document.querySelector("svg");
const wSvg = document.getElementById("wSvg")
const gSvg = document.getElementById("gSvg")
const borderSvg = document.getElementById("borderSvg")
// hover animation for the logo 
logo.addEventListener("mouseover", () => {
  wSvg.style = "transform: translate(-8%, -8%); transition: 0.5s; transition-delay: 0.5s"
  gSvg.style = "transform: translate(8%, 8%); transition: 0.5s; transition-delay: 0.5s"
  borderSvg.style = "opacity: 0; transition: 1s"
})
logo.addEventListener("mouseout", () => {
  wSvg.style = "transform: translate(0%, 0%); transition: 0.5s"
  gSvg.style = "transform: translate(0%, 0%); transition: 0.5s"
  borderSvg.style = "opacity: 1; transition: 1s; transition-delay: 0.5s"
})


const submitForm = document.getElementById("form");
const fullname = document.getElementById("name");
const email = document.getElementById("mail");
const subject = document.getElementById("subject");
const alertName = document.getElementById("alert-name");
const alertMail = document.getElementById("alert-mail");
const alertSubject = document.getElementById("alert-subject");
const alertForm = document.getElementById("alert-form");
const regexCharacters = /^[a-zA-ZÜ-ü-' ]*$/;
const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
const regexSpace = /\s\s/;

// envoi des données du formulaire
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (alertName.innerHTML === "" && alertMail.innerHTML === "" && alertSubject.innerHTML === "") {
    let form = new FormData(submitForm);
  fetch("src/form.php", {
    method: "POST",
    body: form, 
  });
  document.dataForm.reset()
  alertForm.innerHTML = "Your message has been sent."
  } else {
    alertForm.innerHTML = "Error. Please, check all fields."
  }
  
});

// verification du champs "email"
email.addEventListener("keyup", () => {
  if(email.value.match(regexMail)) {
    alertMail.innerHTML = "";
    email.style = "outline: 2px solid green; border: 0";
  } else {
    alertMail.innerHTML = "Please enter a valid email.";
    email.style = "outline: 2px dashed red; border: 0";
  }
});

// verification du champs "name"
fullname.addEventListener("keyup", () => {
  if(!fullname.value.match(regexCharacters)) {
    alertName.innerHTML = "Some characters are not allowed.";
    fullname.style = "outline: 2px dashed red; border: 0";
  } else if (fullname.value.match(regexSpace)) {
    alertName.innerHTML = "No consecutive whitespaces.";
    fullname.style = "outline: 2px dashed red; border: 0";
  } else if(fullname.value.length < 2) {
    alertName.innerHTML = "2 characters minimum.";
    fullname.style = "outline: 2px dashed red; border: 0";
  } else if (fullname.value.length > 50) {
    alertName.innerHTML = "50 characters maximum.";
    fullname.style = "outline: 2px dashed red; border: 0";
  } else {
    alertName.innerHTML = "";
    fullname.style = "outline: 2px solid green; border: 0";
  }
});

// verification du champs "subject"
subject.addEventListener("keyup", () => {
  if(!subject.value.match(regexCharacters)) {
    alertSubject.innerHTML = "Some characters are not allowed.";
    subject.style = "outline: 2px dashed red; border: 0";
  }else if (subject.value.match(regexSpace)) {
    alertSubject.innerHTML = "No consecutive whitespaces.";
    subject.style = "outline: 2px dashed red; border: 0";
  }else if(subject.value.length < 2) {
    alertSubject.innerHTML = "2 characters minimum.";
    subject.style = "outline: 2px dashed red; border: 0";
  } else if (subject.value.length > 50) {
    alertSubject.innerHTML = "50 characters maximum.";
    subject.style = "outline: 2px dashed red; border: 0";
  } else {
    alertSubject.innerHTML = "";
    subject.style = "outline: 2px solid green; border: 0";
  }
});