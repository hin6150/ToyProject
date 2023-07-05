import { festivalDataList } from "./festivaList.js";

export class cardInput extends HTMLElement {
  constructor(dataIndex, city) {
    super();
    this.dataIndex = dataIndex;
    this.city = city;
  }

  setCity(city) {
    this.city = city;
  }
  //사용자 정의 함수
  //사용자 정의 함수의 장점 = 소스 재활용에 용이, 효율적인 코딩 가능 등등

  connectedCallback() {
    const festivalData = festivalDataList[this.city][this.dataIndex]; //datalist에 있는 첫 번째 배열을 가져왔다
    //만든 태그가 HTML에 장착될 때 실행할 코드를 적는 곳
    //super(); //항상 super를 생성자에서 먼저 호출

    const cardTitle = document.createElement("div"); //카드 내용 태그
    cardTitle.classList.add("card-title");
    this.appendChild(cardTitle);

    const festivalTitle = document.createElement("h2"); //축제 이름
    festivalTitle.innerHTML = festivalData.festivalTitle; //축제 이름 설정
    cardTitle.appendChild(festivalTitle);

    const cardClose = document.createElement("span"); //카드 닫기 버튼
    cardClose.innerHTML = "close";
    cardClose.classList.add("card-close-btn");
    cardClose.classList.add("material-symbols-outlined");
    cardTitle.appendChild(cardClose);

    const allCard = document.querySelector(".carousel");
    const overlay = document.querySelector("#overlay");
    // const card = document.querySelector("card-input");
    cardClose.addEventListener("click", (event) => {
      //카드 닫기 버튼
      allCard.style.display = "none";
      overlay.style.display = "none";
    });

    const festivalContents = document.createElement("div"); //축제 이름
    festivalContents.classList.add("festival-contents");
    this.appendChild(festivalContents);

    const festivalImg = document.createElement("img"); //축제 메인 이미지
    festivalImg.setAttribute(
      "src",
      `./img/축제사진/${this.city}/${this.dataIndex}.jpg`
    ); //각각의 이미지
    festivalImg.setAttribute("alt", "축제사진");
    festivalImg.setAttribute("loding", "lazy");

    festivalContents.appendChild(festivalImg);

    const cardContents = document.createElement("div");
    cardContents.classList.add("card-contents");
    festivalContents.appendChild(cardContents);

    for (const [key, value] of Object.entries(festivalData)) {
      //object.entries메서드는 속성 key, value값을 반환
      if (key == "festivalSite") {
        const contentsText = document.createElement("a");
        contentsText.innerHTML = "바로가기";
        contentsText.setAttribute("href", value);
        contentsText.setAttribute("target", "_blank");
        contentsText.className = key;
        cardContents.appendChild(contentsText);
      } else {
        const contentsText = document.createElement("p"); //반복문을 이용해 p태그 5개 생성

        contentsText.innerHTML = value;
        contentsText.className = key;
        cardContents.appendChild(contentsText);
      }
    }
  }
  static get observedAttributes() {
    return ["data-city"];
  }
  attributeChangedCallback() {
    this.setCity(this.dataset.city);
    const festivalData = festivalDataList[this.city][this.dataIndex]; //datalist에 있는 첫 번째 배열을 가져왔다

    const festivalTitle = this.querySelector(".card-title h2"); //축제 이름
    festivalTitle.innerHTML = festivalData.festivalTitle; //축제 이름 설정

    const festivalImg = this.querySelector(".festival-contents img");

    festivalImg.setAttribute(
      "src",
      `./img/축제사진/${this.city}/${this.dataIndex}.jpg`
    ); //각각의 이미지

    for (const [key, value] of Object.entries(festivalData)) {
      //object.entries메서드는 속성 key, value값을 반환
      const contentsText = this.querySelector(`.card-contents .${key}`);
      key == "festivalSite"
        ? contentsText.setAttribute("href", value)
        : (contentsText.innerHTML = value);
    }
  }
}

customElements.define("card-input", cardInput);
