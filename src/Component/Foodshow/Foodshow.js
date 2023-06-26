import React, { useState, useEffect } from "react";
import "./Foodshow.css";

const Foodshow = () => {
  const imageFiles = [
    "./img/post1.jpg",
    "./img/post2.jpg",
    "./img/post3.jpg",
    "./img/post4.jpg",
    "./img/post5.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageFiles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="postList">
      <img
        src="https://t1.daumcdn.net/cfile/tistory/23116133597AD34F07"
        className="postListOne"
      ></img>
      <img
        src="https://www.nongsarang.co.kr/shopimages/cepa5678/0040050000072.jpg?1619513598"
        className="postListTwo"
      ></img>
      <img
        src="https://t1.daumcdn.net/cfile/blog/994FCB3A5BD66ECB2F"
        className="postListThree"
      ></img>
    </div>
  );
};

export default Foodshow;
