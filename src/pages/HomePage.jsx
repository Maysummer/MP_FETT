import React from "react";
import {
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
  SubHeader,
} from "./styles/HomePage";
import fireIcon from "../assets/icons/fire.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import rightArrow from "../assets/icons/rightArrow.svg";
import { leaders, lessonProgress } from "./constants";
import upArrow from "../assets/icons/upArrow.svg";
import { Page, Arrow, HeaderText } from "./styles/General";

const HomePage = ({ name }) => {
  const percent = 70;
  const streak = 65;
  const sortedLeaders = leaders.sort((a, b) => b.score - a.score);

  return (
    <Page>
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
          <small><b>{streak}</b></small>
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
          <div key={lesson.id}>
            <LessonBackground>
              <img src={lesson.imgUrl} alt={lesson.imgAlt} height={57}/>
            </LessonBackground>
            <ProgressPercent>
              <ProgressMainDiv>
                <ProgressChildDiv></ProgressChildDiv>
              </ProgressMainDiv>
              <span>{lesson.percentage}%</span>
            </ProgressPercent>
            <SubHeader>{lesson.text}</SubHeader>
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
        {sortedLeaders.map((leader) => (
          <LeaderBackground key={leader.id}>
            <LeaderDetails>
              <LeaderImg src={leader.imgUrl} alt={leader.altImg} />
              <LeaderNameCountry>
                <SubHeader>{leader.name}</SubHeader>
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
    </Page>
  );
};

export default HomePage;
