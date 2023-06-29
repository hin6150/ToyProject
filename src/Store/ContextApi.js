import React, { createContext, useState } from "react";

// 데이터를 저장할 Context 생성
export const DataContext = createContext();

// Context Provider 컴포넌트 생성
export const DataProvider = ({ children }) => {
  const [dataList, setDataList] = useState([]);

  const addData = (newData) => {
    setDataList((prevDataList) => [...prevDataList, newData]);
  };

  const contextValue = {
    dataList: dataList,
    addData: addData,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
