import React from "react";
import { Banner } from "../Component/Banner/Banner";
import Article from "../Component/Article/Article";
import { Box, RowTwo, TestRow } from "../Component/Boxs/Boxs";

export const Main = () => {
  return (
    <div>
      <Article>
        <Banner></Banner>
      </Article>
      <Article>
        <Box size="36vw" url="mud">
          <p>
            BORYEONG
            <br />
            MUD
            <br />
            FESTIVAL
          </p>
        </Box>
        <Box size="64vw" url="apple">
          <p>
            YESAN
            <br />
            APPLE
          </p>
        </Box>
      </Article>
      <Article>
        <Box size="64vw" url="fire">
          <p>
            2023 PINNACLE LAND
            <br />
            FIREWORKS FESTIVAL
          </p>
        </Box>
        <Box size="36vw" url="green">
          <p>
            GEUMSAN <br />
            PERILLA LEAF
          </p>
        </Box>
      </Article>
    </div>
  );
};
