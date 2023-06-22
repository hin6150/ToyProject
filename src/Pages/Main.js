import React from "react";
import { Banner } from "../Component/Banner/Banner";
import Article from "../Component/Article/Article";
import { Box } from "../Component/Boxs/Boxs";
import { OutBox } from "../Component/SpecialBox/OutBox";

export const Main = () => {
  return (
    <div>
      <Article>
        <Banner></Banner>
      </Article>
      <Article>
        <Box size="36vw" url="mud" height="36vw">
          <p>
            BORYEONG
            <br />
            MUD
            <br />
            FESTIVAL
          </p>
        </Box>
        <Box size="64vw" url="apple" height="36vw">
          <p>
            YESAN
            <br />
            APPLE
          </p>
        </Box>
      </Article>
      <Article>
        <Box size="64vw" url="fire" height="30vw">
          <p>
            2023 PINNACLE LAND
            <br />
            FIREWORKS FESTIVAL
          </p>
        </Box>
        <Box size="36vw" url="green" height="30vw">
          <p>
            GEUMSAN <br />
            PERILLA LEAF
          </p>
        </Box>
      </Article>
      <Article>
        <OutBox></OutBox>
        <Box size="36vw" url="호두" height="48vw"></Box>
      </Article>
      <Article>
        <Box size="70vw" url="배" height="16vw"></Box>
        <Box size="30vw" url="Rectangle 32" height="16vw"></Box>
      </Article>
      <Article>
        <Box size="30vw" url="pink22" height="16vw"></Box>
        <Box size="70vw" url="boryeong" height="16vw"></Box>
      </Article>
      <Article>
        <Box size="70vw" url="festival" height="16vw"></Box>
        <Box size="30vw" url="pink22" height="16vw"></Box>
      </Article>
      <Article>
        <Box size="100%" url="lastimg" height="100vw"></Box>
      </Article>
    </div>
  );
};
