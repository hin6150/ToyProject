import React, { useState, useEffect } from "react";
import "./Texts.css";

const SlideShow = () => {
  const imageFiles = [
    "https://t1.daumcdn.net/cfile/blog/992D6A355AC338FB33",
    "https://image.fnnews.com/resource/media/image/2018/08/01/201808011100393809_l.jpg",
    "https://minio.nculture.org/amsweb-opt/multimedia_assets/132/30186/17053/c/078_2019-%EA%B8%88%EC%82%B0%EC%9D%B8%EC%82%BC%EC%B6%95%EC%A0%9C-medium-size.jpg",
    "https://cdn.msejong.com/news/photo/202211/53619_69589_1759.jpg",
    "https://file2.nocutnews.co.kr/newsroom/image/2019/01/04/20190104160424481427_0_530_733.jpg",
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
        src="https://t1.daumcdn.net/cfile/blog/992D6A355AC338FB33"
        className="postListOne"
      ></img>
      <img
        src="https://image.fnnews.com/resource/media/image/2018/08/01/201808011100393809_l.jpg"
        className="postListTwo"
      ></img>
      <img
        src="https://cdn.msejong.com/news/photo/202211/53619_69589_1759.jpg"
        className="postListThree"
      ></img>
    </div>
  );
};

export default SlideShow;
