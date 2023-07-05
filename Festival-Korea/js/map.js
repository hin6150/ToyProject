window.addEventListener("load", () => {
  const map = document.querySelector(".map");
  // contentDocument 속성으로 접근
  const svgDoc = map.contentDocument;

  // svgDoc(지도)에 .OUTLINE 클래스를 보유하고 있는 모든 요소를 cityList에 배열로 가져옴.
  const cityList = svgDoc.querySelectorAll(".OUTLINE");

  // 배열을 forEach문을 통해 각각의 요소(city)로 분해 후 각각의 요소에 click EventLintener을 장착
  cityList.forEach((city) => {
    city.addEventListener("click", (e) => {
      const carousel = document.querySelector(".carousel");
      const allCard = document.querySelectorAll(".carousel .carousel-card");

      const overlay = document.querySelector("#overlay");

      allCard.forEach((card) => {
        card.setAttribute("data-city", city.dataset.id);
      });
      carousel.style.display = "block";
      overlay.style.display = "block";
    });

    city.addEventListener("mouseover", () => {
      const hoverCity = svgDoc.querySelector(`#${city.id}`);
      const poly = svgDoc.querySelector(".polyG");

      poly.appendChild(hoverCity);
    });
  });
});
