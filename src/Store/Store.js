import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import convert from "xml-js";
import { DataContext } from "./ContextApi";
import { useNavigate } from "react-router-dom/dist";

const Store = () => {
  const navigator = useNavigate();

  const [apiDatas, setApiDatas] = useState([]);
  const [theme, setTheme] = useState([{ festival: true }, { tour: false }, { specialty: false }]);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const { addData, dataList } = useContext(DataContext);

  async function getAllValue() {
    try {
      const selectedTheme = findTrueAttribute();
      const API_URL = `/_prog/openapi/?func=${selectedTheme}&start=${startIndex}&end=${endIndex}`;
      const { data } = await axios.get(API_URL);
      const result = convert.xml2js(data, { compact: true, spaces: 4 });
      setApiDatas(result.item_info.item);
    } finally {
      setIsLoading(false);
    }
  }
  async function getTotalCnt() {
    const selectedTheme = findTrueAttribute();
    const { data } = await axios.get(`/_prog/openapi/?func=${selectedTheme}&mode=getCnt`);
    const result = convert.xml2js(data, { compact: true });
    return result.item_info.item.totalCnt._text;
  }

  useEffect(() => {
    getAllValue();
  }, []);

  const findTrueAttribute = () => {
    const trueAttribute = theme.find((item) => Object.values(item)[0] === true);
    return trueAttribute ? Object.keys(trueAttribute)[0] : null;
  };

  const handleStartIndexChange = (e) => {
    setStartIndex(Number(e.target.value));
  };

  const handleEndIndexChange = (e) => {
    setEndIndex(Number(e.target.value));
  };

  const handleSave = () => {
    let index = 0;
    apiDatas.map((data) => {
      const newData = {
        addr: data.addr._cdata,
        desc: data.desc._cdata,
        h_url: data.h_url._cdata,
        local_nm: data.local_nm._cdata,
        mng_no: data.mng_no._cdata,
        nm: data.nm._cdata,
        nm_sub: data.nm_sub._cdata,
        tel: data.tel._cdata,
        type: data.type._cdata,
        list_img: data.list_img._cdata,
      };
      addData(newData);
      index++;
    });
    alert("Saved " + index);
  };

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const selectedTheme = findTrueAttribute();
      const length = await getTotalCnt(selectedTheme);

      if (startIndex >= endIndex) {
        alert("시작 번호가 끝 번호보다 크거나 같을 수 없습니다.");
        return;
      } else if (startIndex >= length) {
        alert("데이터의 최대 Index는 " + length + "입니다.");
        return;
      }
      getAllValue();
    } catch (error) {}
  };
  return (
    <div>
      <button
        onClick={() => {
          navigator("/");
        }}
      >
        홈으로
      </button>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", padding: "20px 0" }}>
        <label>
          Start Index:
          <input type="number" value={startIndex} onChange={handleStartIndexChange} />
        </label>
        <label>
          End Index:
          <input type="number" value={endIndex} onChange={handleEndIndexChange} />
        </label>
        <RadioGroup theme={theme} setTheme={setTheme} />
        <button onClick={handleClick} disabled={isLoading}>
          {isLoading ? "불러오는 중" : "조회하기"}
        </button>
        <button onClick={handleSave}>저장하기</button>
      </div>
      <TableData apiDatas={apiDatas} />
    </div>
  );
};

export default Store;

const RadioGroup = ({ theme, setTheme }) => {
  const handleRadioChange = (index) => {
    const newTheme = [...theme];
    newTheme.forEach((item, i) => {
      item[Object.keys(item)[0]] = i === index;
    });
    setTheme(newTheme);
  };

  return (
    <div>
      {theme.map((item, index) => (
        <label key={Object.keys(item)[0]} style={{ marginRight: "20px" }}>
          <input type="radio" checked={item[Object.keys(item)[0]]} onChange={() => handleRadioChange(index)} />
          {Object.keys(item)[0]}
        </label>
      ))}
    </div>
  );
};

const TableData = ({ apiDatas }) => {
  return (
    <>
      {apiDatas.map((data, index) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} key={index}>
            <p>{index}번 데이터</p>
            <p>주소: {data.addr._cdata}</p>
            <div dangerouslySetInnerHTML={{ __html: data.desc._cdata }}></div>
            <p style={{ wordBreak: "break-all" }}>URL: {data.h_url._cdata}</p>
            <p>
              좌표:
              {data.lat._cdata} {data.lng._cdata}
            </p>
            <p>위치: {data.local_nm._cdata}</p>
            <p>번호: {data.mng_no._cdata}</p>
            <p>제목: {data.nm._cdata}</p>
            <p>소제목: {data.nm_sub._cdata}</p>
            <p>번호: {data.tel._cdata}</p>
            <p>타입: {data.type._cdata}</p>
            <div>
              <img src={data.list_img._cdata} alt={data.list_img._cdata} />
            </div>
          </div>
        );
      })}
    </>
  );
};
