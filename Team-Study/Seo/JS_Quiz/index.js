const img1 = document.createElement("img");
img1.setAttribute("src", "../StarBucks/images/71403.png");
img1.setAttribute("alt", "img"); //절대 경로, 상대경로

const box = document.querySelector(".container");
box.append(img1);
const txt = document.querySelectorAll(".box p");

txt.forEach((txt1) => {
  txt1.setAttribute("style", "font-size:24px");
});
txt.forEach((txt1) => {
  if (txt1.getAttribute("class") == "answer")
    txt1.textContent = "네 잘하고있습니다.";
});

console.log(txt);
append();
컨테이너.append(이미지);
forEach(() => {});
getAttribute();
