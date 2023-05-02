const container = document.querySelector(".container");
const img = document.createElement("img");
img.setAttribute("src", "../StarBucks/images/badge1.jpg");
img.setAttribute("alt", "img");
container.append(img);

const box_in_p = document.querySelectorAll(".box p");

box_in_p.forEach((element) => {
  element.setAttribute("style", "font-size: 24px");
});
for (let A = 0; A < 4; A++) {
  if (box_in_p[A].classList == "answer")
    box_in_p[A].innerHTML = "네 잘하고 있습니다.";
}
box_in_p.forEach((element) => {
  if (element.classList == "answer") element.innerHTML = "네 잘하고 있습니다.";
});

// box_in_p.forEach((element) => {
//   if (box_in_p == element){
//     element={"네 잘하고 있습니다."}

// });
