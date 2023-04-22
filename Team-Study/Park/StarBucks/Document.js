/*1번*/

const img = document.createElement("img");
img.setAttribute("src", "media/Serch.png");

const container = document.querySelector(".container");
container.append(img);

/*2번*/
const boxElements = document.querySelectorAll(".box p");

boxElements.forEach((names) => {
  names.setAttribute("font-size", "24x");
});

/*3번*/
const answer = document.querySelector(".box .answer");
if (answer) {
  answer.textContent = "네 잘하고있습니다.";
}
