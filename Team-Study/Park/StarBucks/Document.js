/*1번*/

const img = document.createElement("img");
img.setAttribute("src", "images/Serch.png");

const container = document.querySelector(".container");
console.log(container);
container.append(img);

/*2번*/
const boxElements = document.querySelectorAll(".box p");

boxElements.forEach((names) => {
  names.setAttribute("style", "font-size :24px");
});

/*3번*/
boxElements.forEach((names) => {
  if (names.getAttribute("class") == "answer")
    names.textContent = "네 잘하고있습니다.";
});
