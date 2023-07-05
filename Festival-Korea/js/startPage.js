const body = document.querySelector("body");
const startPage = document.querySelector(".start-page"); //기차 애니메이션 div
const participationBtn = document.querySelector(".participation-btn"); //축제 참여 버튼
const audio = document.querySelector(".audio"); //기차 달리는 bgm
const outside = document.querySelector(".start-page-background"); //기차 밖 픙경 div
const outsideView = document.querySelector(".outside-view"); //기차 밖 픙경 ul
const outsideImg = document.querySelector(".outside-img img"); //기차 밖 픙경 img
let num = 0;

window.onload = function () {
  //새로고침 시 스크롤 맨 위로
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

function changeTrainImage() {
  //기차 이미지가 랜덤으로 뜨도록
  const IMG_COUNT = 3;
  const trainImg = document.querySelector(".train");
  const randomIndex = Math.floor(Math.random() * IMG_COUNT) + 1;
  trainImg.src = `./img/start-page/기차배경${randomIndex}.png`;
}

function changeOutsideImages() {
  //기차 풍경 이미지가 랜덤으로 뜨도록
  const IMG_COUNT = 12;
  const imgSrcs = Array.from(
    { length: IMG_COUNT },
    (_, i) => `./img/start-page/outside${i + 1}.png`
  );
  const outsideImgs = document.querySelectorAll(".outside-img img");
  const usedIndexes = []; // 이전에 선택된 인덱스를 추적하는 배열 / 이미지 중복 방지

  outsideImgs.forEach((img) => {
    //기차 풍경 이미지가 중복으로 뜨지 않도록
    let randomIndex = Math.floor(Math.random() * IMG_COUNT);
    while (usedIndexes.includes(randomIndex)) {
      // 중복 검사를 위한 반복문
      randomIndex = Math.floor(Math.random() * IMG_COUNT);
    }
    usedIndexes.push(randomIndex); // 선택된 인덱스를 usedIndexes 배열에 추가
    img.src = imgSrcs[randomIndex];
  });
}

function moveOutsideImages() {
  //이미지가 하나씩 이동되도록
  const IMG_COUNT = 12;
  const imgWidth = outsideView.querySelector("li").clientWidth;
  const nextPosition = -(num * imgWidth);
  outsideView.style.transition = "transform 0.5s ease-in-out"; // 전환 효과를 추가
  outsideView.style.transform = `translateX(${nextPosition}px)`;
  num++;

  if (num >= IMG_COUNT) {
    clearInterval(slideInterval);
  }
}

changeTrainImage(); //기차 이미지가 랜덤으로 뜨도록하는 함수 호출
changeOutsideImages(); // 기차 밖 풍경이 랜덤으로 나타나도록 하는 함수 호출

participationBtn.addEventListener("click", () => {
  // 축제 참여 버튼 클릭 시
  participationBtn.style.opacity = 0; // 페이드아웃 되도록 opacity 값 변경
  audio.play(); //기차 bgm 재생

  setTimeout(() => {
    startPage.style.transition = "opacity 1s ease-in-out";
    startPage.style.opacity = 0; // startPage를 fadeOut
    setTimeout(() => {
      startPage.style.display = "none"; // startPage를 삭제
    }, 1000);
  }, 4700); // 4.7초 후에 전체 애니메이션 사라지도록

  setTimeout(() => {
    setInterval(() => {
      //기차 이미지가 하나씩 이동하는 함수 호출
      moveOutsideImages();
    }, 1400);
  });

  setTimeout(() => {
    body.classList.remove("stop-scrolling");
  }, 6000); //전체 애니메이션이 끝나고 6초 후에 stop-scrolling 클래스 제거
});
