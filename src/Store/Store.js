import axios from "axios";
import React, { useEffect, useState } from "react";
import convert from "xml-js";

const Store = () => {
  // src/App.js
  useEffect(() => {
    // async function getTotalCnt(theme) {
    //   const { data } = await axios.get(`/_prog/openapi/?func=${theme}&mode=getCnt`);
    //   const result = convert.xml2js(data, { compact: true });
    //   return result.item_info.item.totalCnt._text;
    // }

    async function getAllValue(theme, startIndex, endIndex) {
      const API_URL = `/_prog/openapi/?func=${theme}&start=${startIndex}&end=${endIndex}`;
      const { data } = await axios.get(API_URL);
      const result = convert.xml2js(data, { compact: true, spaces: 4 });
      const newData = { ...data };
      newData[theme] = result.item_info.item;
      // console.log(result.item_info.item);
      setFestival(result.item_info.item);
      // return result.item_info.item;
    }
    // getTotalCnt("festival");
    getAllValue("festival", 0, 10);
  }, []);
  const [festival, setFestival] = useState([]);
  const [selectedButton, setSelectedButton] = useState("");
  // const [data, setData] = useState({ festival: {}, tour: {}, specialty: {} });

  const handleChange = (e) => {
    console.log(e.value);
    setSelectedButton(e.value);
  };

  return (
    <div>
      <p>시작 번호</p>
      <input type="number"></input>
      <p>끝 번호</p>
      <input type="number"></input>
      <p>타입</p>
      <div>
        <input
          type="radio"
          value="축제"
          name="festival"
          checked={selectedButton === "축제"}
          onChange={handleChange}
        ></input>
        <input
          type="radio"
          value="음식"
          name="specialty"
          checked={selectedButton === "음식"}
          onChange={handleChange}
        ></input>
        <input
          type="radio"
          value="관광"
          name="tour"
          checked={selectedButton === "관광"}
          onChange={handleChange}
        ></input>
      </div>
      <button onChange={() => {}}>조회하기</button>
      <p>
        {festival.map((data) => {
          return (
            <table style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <tr>
                <p> 주소: {data.addr._cdata} </p>
              </tr>
              <tr>
                <p> 설명: {data.desc._cdata} </p>
              </tr>
              <tr>
                <p> URL: {data.h_url._cdata} </p>
              </tr>
              <tr>
                <p>
                  좌표:
                  {data.lat._cdata} {data.lng._cdata}
                </p>
              </tr>
              <tr>
                <p> 위치: {data.local_nm._cdata}</p>
              </tr>
              <tr>
                <p> 번호: {data.mng_no._cdata}</p>
              </tr>
              <tr>
                <p> 제목: {data.nm._cdata}</p>
              </tr>
              <tr>
                <p> 소제목: {data.nm_sub._cdata}</p>
              </tr>
              <tr>
                <p> 번호: {data.tel._cdata}</p>
              </tr>
              <tr>
                <p> 타입: {data.type._cdata}</p>
              </tr>
              <tr>
                <p>
                  <img src={data.list_img._cdata} alt={data.list_img._cdata} />
                </p>
              </tr>
            </table>
          );
        })}
      </p>
    </div>
  );
};

export default Store;
