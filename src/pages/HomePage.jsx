import React from "react";
import {
  Arrow,
  FireIcon,
  FireNum,
  Goal,
  Header,
  Intro,
  LessonBackground,
  PercentText,
  Play,
  CircularProgressBarCont,
  ProgressContainer,
  Ready,
  ReadyPlay,
  StreakAdd,
  TodaysGoal,
  ToggleContainer,
  ProgressChildDiv,
  ProgressMainDiv,
  ProgressPercent,
  LessonContainer,
  Dot,
  Frequency,
  SectionHeader,
  LeaderBackground,
  LeaderImg,
  LeaderNameCountry,
  LeaderDetails,
  Leaders,
  Home,
  HeaderText,
} from "./styles/HomePage";
import fireIcon from "../assets/icons/fire.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import rightArrow from "../assets/icons/rightArrow.svg";
import { leaders, lessonProgress } from "./constants";
import upArrow from "../assets/icons/upArrow.svg";
import FooterComp from "../components/Footer";


const HomePage = ({ name }) => {
  const percent = 70;
  const streak = 65;

  return (
    <Home>
      <Header>
        <Intro>
          <p>Hello {name},</p>
          <ReadyPlay>
            <Ready>Ready to</Ready>
            <Play>play English?</Play>
          </ReadyPlay>
        </Intro>
        <ToggleContainer>
          <FireIcon src={fireIcon} alt="fire icon" />
          <div>{streak}</div>
        </ToggleContainer>
      </Header>
      <ProgressContainer>
        <TodaysGoal>
          <Goal>Today's goal</Goal>
          <CircularProgressBarCont>
            <CircularProgressbar
              value={percent}
              text={`${percent}%`}
              styles={buildStyles({
                textColor: "black",
                textWeight: 700,
                trailColor: "#FFD3BE",
                pathColor: "#ff8b53",
              })}
            ></CircularProgressbar>
          </CircularProgressBarCont>
        </TodaysGoal>
        <PercentText>
          <HeaderText>Excellent!</HeaderText>
          <p>You're almost there, finish the goal to achieve</p>
          <StreakAdd>
            <img src={fireIcon} width={15} alt="fire icon" />
            <FireNum>{10}</FireNum>
          </StreakAdd>
        </PercentText>
      </ProgressContainer>
      <SectionHeader>
        <HeaderText>Your lesson</HeaderText>
        <Arrow src={rightArrow} alt="right arrow icon" />
      </SectionHeader>
      <LessonContainer>
        {lessonProgress.map((lesson) => (
          <div>
            <LessonBackground>
              <img src={lesson.imgUrl} alt={lesson.imgAlt} height={57}/>
            </LessonBackground>
            <ProgressPercent>
              <ProgressMainDiv>
                <ProgressChildDiv></ProgressChildDiv>
              </ProgressMainDiv>
              <span>{lesson.percentage}%</span>
            </ProgressPercent>
            <b>{lesson.text}</b>
            <Frequency>
              <div>{lesson.frequency} days</div>
              <Dot></Dot>
              <span>daily</span>
            </Frequency>
          </div>
        ))}
      </LessonContainer>
      <SectionHeader>
        <HeaderText>Leaderboard</HeaderText>
        <Arrow src={rightArrow} alt="right arrow icon" />
      </SectionHeader>
      <Leaders>
        {leaders.map((leader) => (
          <LeaderBackground>
            <LeaderDetails>
              <LeaderImg src={leader.imgUrl} alt={leader.altImg} />
              <LeaderNameCountry>
                <b>{leader.name}</b>
                <p>{leader.country}</p>
              </LeaderNameCountry>
            </LeaderDetails>
            <LeaderDetails>
              <img src={upArrow} alt="upward arrow" />
              <StreakAdd>
                <img src={fireIcon} width={15} alt="fire icon" />
                <FireNum>{leader.score}</FireNum>
              </StreakAdd>
            </LeaderDetails>
          </LeaderBackground>
        ))}
      </Leaders>
      <FooterComp />
    </Home>
  );
};

export default HomePage;
