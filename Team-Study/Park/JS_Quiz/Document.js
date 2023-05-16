/*1번*/

const img = document.createElement("img");
img.setAttribute("src", "images/serach.png");
// 경로 오류

const container = document.querySelector(".container");
container.append(img);

/*2번*/
const boxElements = document.querySelectorAll(".box p");

boxElements.forEach((names) => {
  names.setAttribute("sytle", "font-size: 24px");
});

//names.setAttribute(" ㅏ", "font-size: 24px")

/*3번*/
const answer = document.querySelector(".box .answer");
boxElements.forEach((names) => {
  if (names.class == "answer") names.textContent = "네 잘하고있습니다.";
});

answer.textContent = "네 잘하고있습니다.";

// boxElements.forEach((names) => {
//   if (names.class=="answer") names.textContent = "네 잘하고있습니다.";
// });
