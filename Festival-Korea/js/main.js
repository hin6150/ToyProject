const searchEL = document.querySelector(".search");
const searchInputEL = searchEL.querySelector("input");

function goToMainPage() {
  //로고 클릭 시 메인페이지 이동
  window.location.href =
    "https://likelionknu11.github.io/frontend2-javascript/";
}

searchEL.addEventListener("click", function () {
  searchInputEL.focus();
});

searchInputEL.addEventListener("focus", function () {
  searchEL.classList.add("focused");
  searchInputEL.setAttribute("placeholder", "지역명을 입력하세요");
});

searchInputEL.addEventListener("focusout", function () {
  searchInputEL.value = "";
});

searchInputEL.addEventListener("blur", function () {
  searchEL.classList.remove("focused");
  searchInputEL.setAttribute("placeholder", "");
});

const navList = document.querySelectorAll(".nav-action");

navList.forEach((nav, idx) => {
  const area = document.querySelector(`.area-${idx + 1}`);
  const action = document.querySelector(`.action-${idx + 1}`);

  nav.addEventListener("mouseover", (e) => {
    action.style.color = "black";
    action.style.fontWeight = "bold";

    area.style.display = "block";
  });
  nav.addEventListener("mouseout", (e) => {
    action.style.color = "white";
    action.style.fontWeight = "normal";

    area.style.display = "none";
  });

  area.addEventListener("mouseover", (e) => {
    action.style.fontWeight = "bold";
    action.style.color = "black";

    area.style.display = "block";
  });
  area.addEventListener("mouseout", (e) => {
    action.style.color = "white";
    action.style.fontWeight = "normal";

    area.style.display = "none";
  });
});

const clickList = document.querySelectorAll(".nav-click");

clickList.forEach((text) => {
  text.addEventListener("click", (e) => {
    openCity(text);
  });
});

const card = document.querySelector(".carousel");
const overlay = document.querySelector("#overlay");
// const card = document.querySelector("card-input");
overlay.addEventListener("click", (event) => {
  //카드 닫기 버튼
  card.style.display = "none";
  overlay.style.display = "none";
  menu.style.display = "none";
});

const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".right-menu");

menuButton.addEventListener("click", () => {
  overlay.style.display = "block";
  menu.style.display = "block";
});

const menuClose = document.querySelector(".top .close-btn");
menuClose.addEventListener("click", () => {
  overlay.style.display = "none";
  menu.style.display = "none";
});

const menuClick = document.querySelectorAll(".right-menu .content li");
menuClick.forEach((text) => {
  text.addEventListener("click", () => {
    openCity(text);
    menu.style.display = "none";
  });
});

function openCity(text) {
  const city = text.getAttribute("value");

  const carousel = document.querySelector(".carousel");
  const allCard = document.querySelectorAll(".carousel .carousel-card");

  const overlay = document.querySelector("#overlay");

  allCard.forEach((card) => {
    card.setAttribute("data-city", city);
  });
  carousel.style.display = "block";
  overlay.style.display = "block";
}
