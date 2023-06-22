import React from "react";
import { Banner } from "../Component/Banner/Banner";
import Article from "../Component/Article/Article";
import { Box, BoxTypeTwo } from "../Component/Boxs/Boxs";
import { LastBox } from "../Component/Boxs/Boxs";
import { SpecialBox } from "../Component/SpecialBox/SpecialBox";

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
        <SpecialBox></SpecialBox>
        <Box size="36vw" url="호두" height="48vw">
          <p>
            CHEONAN <br />
            WALNUT
          </p>
        </Box>
      </Article>
      <Article>
        <Box size="70vw" url="배" height="32vw"></Box>
        <BoxTypeTwo size="30vw" url="Rectangle 32" height="32vw" right="5%">
          <p>
            Local
            <br />
            Specialties
            <br />
            of the Month
          </p>
        </BoxTypeTwo>
      </Article>
      <Article>
        <BoxTypeTwo size="30vw" url="pink22" height="36vw" right="65%">
          <p>
            Festival
            <br />
            of the Month
          </p>
        </BoxTypeTwo>
        <Box size="70vw" url="boryeong" height="36vw"></Box>
      </Article>
      <Article>
        <Box size="70vw" url="festival" height="36vw"></Box>
        <BoxTypeTwo size="30vw" url="pink22" height="36vw" right="5%">
          <p>
            Festival
            <br />
            of the Month
          </p>
        </BoxTypeTwo>
      </Article>
      <Article>
        <LastBox size="100%" url="tree" height="100vh"></LastBox>
      </Article>
    </div>
  );
};
