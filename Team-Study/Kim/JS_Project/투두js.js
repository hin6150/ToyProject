console.log("test");
const button1 = document.querySelector("button");
button1.addEventListener("click", () => {
  const input1 = document.querySelector(".box label input");
  const input_space = document.querySelector(".input-content");
  const CE = document.createElement("div");
  CE.className = "row";
  input_space.append(CE);
  const p = document.createElement("p");
  CE.append(p);
  p.innerHTML = input1.value;
  console.log("add");
});
