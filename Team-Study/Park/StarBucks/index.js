const search = document.querySelector(".menu_login .material-symbols-outlined");
const focused = document.createElement("input");
if (search === focus) {
  search.classList.add("focused");
  focused.addEventListener("focus", () => {
    focused.style.width = "200px";
    search.ariaPlaceholder("통합검색");
  });
} else {
  search.classList.remove("focused");
  focused.addEventListener("focus", () => {
    focused.style.width = "10px";
    search.ariaPlaceholder("");
  });
}

const coffee_img = document.querySelectorAll(".main_img .inner img");
coffee_img.forEach((img1) => {
  gsap.from(".img1", {
    duration: 2,
    opacity: 0.2,
  });
});
coffee_img.forEach((img2) => {
  gsap.from(".img2", {
    duration: 2,
    opacity: 0.2,
    delay: 1,
  });
});
coffee_img.forEach((img3) => {
  gsap.from(".img3", {
    duration: 2,
    opacity: 0.2,
    delay: 2,
  });
});
coffee_img.forEach((img4) => {
  gsap.from(".img4", {
    duration: 2,
    opacity: 0.2,
    delay: 3,
  });
});
