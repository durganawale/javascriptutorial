const imgCardElmt = document.querySelector("#imgCard");
const badgeColorElmt = document.querySelector("#badgeColor");
const redBTNElmt = document.querySelector("#redBTN");
const greenBTNElmt = document.querySelector("#silverBTN");
const blueBTNElmt = document.querySelector("#blueBTN");
const btnViewElmt = document.querySelector("#btnView");

// SILVER
function changeToSilver() {
  badgeColorElmt.classList.remove("bg-danger", "bg-primary");
  badgeColorElmt.classList.add("bg-secondary");

  badgeColorElmt.textContent = "Silver";

  btnViewElmt.classList.remove("btn-danger", "btn-primary");
  btnViewElmt.classList.add("btn-secondary");

  imgCardElmt.setAttribute("src", "./silverbike.jpg");
}

greenBTNElmt.addEventListener("click", changeToSilver);


// RED
function changeToRed() {
  badgeColorElmt.classList.remove("bg-success", "bg-primary", "bg-secondary");
  badgeColorElmt.classList.add("bg-danger");

  badgeColorElmt.textContent = "Red";

  btnViewElmt.classList.remove("btn-success", "btn-primary", "btn-secondary");
  btnViewElmt.classList.add("btn-danger");

  imgCardElmt.setAttribute("src", "./redbike.jpg");
}

redBTNElmt.addEventListener("click", changeToRed);


// BLUE
function changeToBlue() {
  badgeColorElmt.classList.remove("bg-danger", "bg-success", "bg-secondary");
  badgeColorElmt.classList.add("bg-primary");

  badgeColorElmt.textContent = "Blue";

  btnViewElmt.classList.remove("btn-danger", "btn-success", "btn-secondary");
  btnViewElmt.classList.add("btn-primary");

  imgCardElmt.setAttribute("src", "./bluebike.jpg");
}

blueBTNElmt.addEventListener("click", changeToBlue);