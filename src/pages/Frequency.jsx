import React from "react";
import { Page, Arrow, HeaderText } from "./styles/General";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";
import {
  Date,
  Day,
  DotContainer,
  Header,
  ImgWithBg,
  PWithBg,
  SKillImgContainer,
  SkillBackground,
  SkillImg,
  SkillName,
  SkillPercent,
  SkillsContainer,
  Status,
} from "./styles/Frequency";
import check from "../assets/icons/check.svg";
import { Dot } from "./styles/Frequency";
import { skills } from "../constants";

const Frequency = () => {
  return (
    <Page>
      <Header>
        <Arrow src={leftArrow} alt="" />
        <HeaderText>September</HeaderText>
        <Arrow src={rightArrow} alt="" />
      </Header>
      <Header>
        <Date>
          <PWithBg>2</PWithBg>
          <Day>Mon</Day>
        </Date>
        <Date>
          <ImgWithBg src={check} alt="" />
          <Day>Tue</Day>
        </Date>
        <Date>
          <ImgWithBg src={check} alt="" />
          <Day>Wed</Day>
        </Date>
        <Date>
          <PWithBg $today>5</PWithBg>
          <Day $today>Thu</Day>
        </Date>
        <Date>
          <PWithBg>6</PWithBg>
          <Day>Fri</Day>
        </Date>
        <Date>
          <PWithBg>7</PWithBg>
          <Day>Sat</Day>
        </Date>
        <Date>
          <PWithBg>8</PWithBg>
          <Day>Sun</Day>
        </Date>
      </Header>
      <Header>
        <HeaderText>Skills</HeaderText>
        <DotContainer>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
        </DotContainer>
      </Header>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillBackground key={skill.id}>
            <SKillImgContainer>
              <SkillImg src={skill.imgUrl} />
            </SKillImgContainer>
            <SkillName>{skill.name}</SkillName>
            <SkillPercent>{skill.percentage}%</SkillPercent>
            <Status status={skill.status}>{skill.status}</Status>
          </SkillBackground>
        ))}
      </SkillsContainer>
    </Page>
  );
};

export default Frequency;
