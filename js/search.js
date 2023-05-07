import { festivalDataList } from "./festivaList.js";

document.querySelector("#searchInput").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchEvt();
  }
});

const searchContainer = document.querySelector(".searchContainer"); //축제 상세 창
const searchSpan = document.querySelector("#searchSpan"); //축제 상세 창 닫기 버튼

searchSpan.addEventListener("click", (event) => {
  //상세 창 닫기 버튼 클릭 시 축제 리스트로 이동
  searchContainer.style.opacity = 0;
  searchContainer.style.transition = "0s";
  searchContainer.style.visibility = "hidden";
  var elements = document.querySelectorAll("h1");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transition = "1s";
    elements[i].style.visibility = "visible";
  }
});

function searchEvt() {
  var searchContainer = document.getElementById("searchContainer");
  if (searchContainer.style.visibility === "visible") {
    searchContainer.style.opacity = 0;
    searchContainer.style.transition = "0s";
    searchContainer.style.visibility = "hidden";
  }
  var elements = document.querySelectorAll("h1"); // 검색전에 이전에 있던 모든 h1 제거.
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }

  var map = document.getElementsByClassName("map"); // 검색시 map은 안 보이고 숨겨져 있던 seacrhBox는 보이게 함.
  map[0].style.visibility = "hidden";
  map[0].style.opacity = 0;
  var searchBox = document.getElementById("searchBox");
  searchBox.style.visibility = "visible";
  searchBox.style.opacity = 1;

  var searchContainer = document.getElementById("searchContainer"); // 검색 내용에 해당되는 요소를 담을 searchContainer
  var searchInput = document.getElementById("searchInput"); // 검색 내용을 찾을 searchInput

  for (var i = 0; i < festivalDataList.Busan.length; i++) {
    // 검색 내용이 해당되는 festivalList 있는 지 찾기 위한 반복문
    for (let a in festivalDataList.Busan[i]) {
      if (festivalDataList.Busan[i][a].includes(searchInput.value)) {
        // 검색 내용이 포함되었다면 searchBox에 해당 축제들의 타이틀들을 추가
        const festivalText = document.createElement("h1");

        festivalText.innerHTML = festivalDataList.Busan[i].festivalTitle;
        searchBox.appendChild(festivalText);
        festivalText.addEventListener("click", function () {
          // 타이틀을 검색하면 가려져 있던 searchContainer가 보이게 되고 모든 타이틀들을 가리기
          searchContainer.style.transition = "1s";
          searchContainer.style.visibility = "visible";
          searchContainer.style.opacity = 1;
          var elements = document.querySelectorAll("h1");
          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transition = "0s";
            elements[i].style.visibility = "hidden";
          }
          var clickTitle = document.querySelectorAll("h2"); // 이전에 있던 건 제거
          clickTitle[0].remove();
          const festivalText2 = document.createElement("h2"); // 클릭된 타이틀은 searchContainer에 추가하기
          festivalText2.innerHTML = festivalText.innerHTML;
          searchContainer.appendChild(festivalText2);
        });
        break;
      }
    }
  }
}
