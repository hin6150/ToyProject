import React, { useEffect, useRef } from "react";
import "./Boxs.css";
import Tree from "../Tree/Tree";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Box = (props) => {
  return (
    <div className="Box" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxText">{props.children}</div>
    </div>
  );
};

export const AnimationBox = (props) => {
  const boxElementRef = useRef(null);
  const imageElementRef = useRef(null);

  useEffect(() => {
    const boxElement = boxElementRef.current;
    const imageElement = imageElementRef.current;

    gsap.set(imageElement, { width: "100%" }); // 초기 상태 설정

    gsap.to(imageElement, {
      width: 0,
      duration: 1,
      scrollTrigger: {
        trigger: boxElement,
        start: "top 50%", // 이미지가 사라지기 시작할 스크롤 위치
        // end: "bottom 20%", // 이미지가 완전히 사라질 스크롤 위치
        scrub: false, // 스크롤 방향에 따라 애니메이션을 전환
      },
    });
  }, []);

  return (
    <div
      className="Box"
      style={{
        width: props.size,
        height: props.height,
        backgroundColor: "rgba(255, 255, 255, 0)",
        justifyContent: props.dire == "left" ? "flex-start" : "flex-end",
      }}
      ref={boxElementRef}
    >
      <img src={`./img/${props.url}.png`} alt={props.url} ref={imageElementRef} />
      <div className="BoxText">{props.children}</div>
    </div>
  );
};

export const BoxTypeTwo = (props) => {
  const boxElementRef = useRef(null);
  const imageElementRef = useRef(null);

  useEffect(() => {
    const boxElement = boxElementRef.current;
    const imageElement = imageElementRef.current;

    gsap.set(imageElement, { opacity: 0 }); // 초기 상태 설정

    gsap.to(imageElement, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: boxElement,
        start: "top 70%", // 이미지가 사라지기 시작할 스크롤 위치
        // end: "bottom 20%", // 이미지가 완전히 사라질 스크롤 위치
        scrub: false, // 스크롤 방향에 따라 애니메이션을 전환
      },
    });
  }, []);

  return (
    <div className="BoxTypeTwo" style={{ width: props.size, height: props.height }} ref={boxElementRef}>
      <img src={`./img/${props.url}.png`} alt={props.url} ref={imageElementRef} />
      <div className="BoxTypeTwoText" style={{ right: props.right }}>
        {props.children}
      </div>
    </div>
  );
};

export const BoxTypeFour = (props) => {
  return (
    <div className="BoxTypeFour" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxTypeFourTextOne">
        <p>
          BORYEONG
          <br />
          MUD
          <br />
          FESTIVAL
        </p>
      </div>
      <div className="BoxTypeFourTextTwo">
        <p>
          충청남도
          <br />
          보령시
          <br />
          신흥동 2282
        </p>
      </div>
      <div className="BoxTypeFourTextThree">
        <p>2023.07.21 - 2023.08.06</p>
        <p>041-930-0891</p>
      </div>
    </div>
  );
};

export const BoxTypeFive = (props) => {
  return (
    <div className="BoxTypeFour" style={{ width: props.size, height: props.height }}>
      <img src={`./img/${props.url}.png`} alt={props.url} />
      <div className="BoxTypeFourTextOne">
        <p>
          PINNACLE LAND
          <br />
          SPRING HEAVEN
          <br />
          FESTIVAL
        </p>
      </div>
      <div className="BoxTypeFourTextTwo">
        <p>
          충청남도
          <br />
          아산시
          <br />
          월선길 20-42
        </p>
      </div>
      <div className="BoxTypeFourTextThree">
        <p>2023.03.24 - 2023.05.30</p>
        <p>041-541-2582</p>
      </div>
    </div>
  );
};

export const LastBox = () => {
  return (
    <div className="LastBox">
      <Tree width="100vw" height="100vh" />
    </div>
  );
};

export const BackGroundBox = (props) => {
  const styles = {
    backgroundImage: `url(https://hin6150.github.io/StarBucksExample/images/reserve_store_bg.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <section className="backgroundBox" style={styles}>
      {props.children}
    </section>
  );
};
