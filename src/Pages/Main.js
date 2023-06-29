import React, { useContext, useEffect } from "react";
import { Banner } from "../Component/Banner/Banner";
import Article from "../Component/Article/Article";
import {
  Box,
  BoxTypeTwo,
  BoxTypeFour,
  LastBox,
  BoxTypeFive,
  BackGroundBox,
  AnimationBox,
} from "../Component/Boxs/Boxs";
import { SpecialBox } from "../Component/SpecialBox/SpecialBox";
import Section from "../Component/Section/Section";
import axios from "axios";
import convert from "xml-js";
import { DataContext } from "../Store/ContextApi";

export const Main = () => {
  const { addData } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `/_prog/openapi/?func=tour&start=1&end=480`;
      const { data } = await axios.get(API_URL);
      const result = convert.xml2js(data, { compact: true, spaces: 4 });
      console.log(result.item_info.item);

      addData(result.item_info.item);
    };
    console.log("fetchData");
    fetchData();
  }, []);

  return (
    <Section>
      <Banner />
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
        <BackGroundBox url="">
          <AnimationBox size="64vw" url="apple" height="36vw" dire="left">
            <p>
              YESAN
              <br />
              APPLE
            </p>
          </AnimationBox>
        </BackGroundBox>
      </Article>
      <Article>
        <BackGroundBox url="">
          <AnimationBox size="64vw" url="fire" height="30vw" dire="right">
            <p>
              2023 PINNACLE LAND
              <br />
              FIREWORKS FESTIVAL
            </p>
          </AnimationBox>
        </BackGroundBox>
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
        <BackGroundBox url="">
          <AnimationBox size="70vw" url="배" height="32vw" dire="left">
            <p>
              CHEONAN
              <br />
              PEAR
            </p>
          </AnimationBox>
        </BackGroundBox>
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
          <p>Festival of the Month</p>
        </BoxTypeTwo>
        <BoxTypeFour size="70vw" url="boryeong" height="36vw" />
      </Article>
      <Article>
        <BoxTypeFive size="70vw" url="festival" height="36vw" />
        <BoxTypeTwo size="30vw" url="pink22" height="36vw" right="5%">
          <p>
            Festival
            <br />
            of the Month
          </p>
        </BoxTypeTwo>
      </Article>
      <LastBox />
    </Section>
  );
};
