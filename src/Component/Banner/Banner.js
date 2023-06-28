import React, { useEffect, useState } from "react";
import "./Banner.css";

export const Banner = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 1);
    }, 25); // 회전 속도를 조절하려면 이 값을 조정하세요.

    return () => {
      clearInterval(interval);
    };
  }, []);
  const styles = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div className="firstBox">
      <img src="./img/pink.png" alt="img1p" className="pink11" />
      <img src="./img/blue.png" alt="img1b" className="blue11" />
      <img src="./img/image 2.png" alt="imgcw" className="cw" style={styles} />
      <p className="fp">
        WELCOME TO
        <br />
        CHUNGCHEONGNAM-DO
      </p>
    </div>
  );
};
