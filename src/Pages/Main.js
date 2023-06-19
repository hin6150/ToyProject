import React from "react";
import Banner from "../Component/Banner/Banner";
import Article from "../Component/Article/Article";
import Section from "../Component/Section/Section";
import { FirstBox, SecondBox } from "../Component/Boxs/Boxs";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <Section>
      <Article>
        <Banner></Banner>
      </Article>

      <Article>
        <FirstBox text="BORYEONG MUD FESTIVAL"></FirstBox>
        <FirstBox text="localA"></FirstBox>
      </Article>

      <Article>
        <FirstBox text="localB"></FirstBox>
        <FirstBox text="localC"></FirstBox>
      </Article>

      <Article>
        <SecondBox text="localD"></SecondBox>
        <SecondBox text="localE"></SecondBox>
        <SecondBox text="localF"></SecondBox>
        <SecondBox text="localG"></SecondBox>
      </Article>

      <div>
        <Link to={"/detail"}>
          <button>포스터</button>
        </Link>
      </div>
    </Section>
  );
};
