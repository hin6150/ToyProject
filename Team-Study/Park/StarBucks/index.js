const search = document.querySelector(".menu_login .material-icon");
const focused = document.createElement("input");
if (search === focus) {
  search.classList.add("focused");
  focused.addEventListener("focus", function () {
    focused.style.width = "100px";
  });
  search.ariaPlaceholder("통합검색");
} else if (search === blur) {
  search.classList.remove("focused");
  search.ariaPlaceholder("");
}

const coffe_img = document.querySelectorAll(".main_img .inner img");
coffe_img.forEach((img1) => {
  gsap.from(".img1", {
    duration: 2,
    opacity: 0.2,
  });
});
coffe_img.forEach((img2) => {
  gsap.from(".img2", {
    duration: 2,
    opacity: 0.2,
    delay: 1,
  });
});
coffe_img.forEach((img3) => {
  gsap.from(".img3", {
    duration: 2,
    opacity: 0.2,
    delay: 2,
  });
});
coffe_img.forEach((img4) => {
  gsap.from(".img4", {
    duration: 2,
    opacity: 0.2,
    delay: 3,
  });
});
