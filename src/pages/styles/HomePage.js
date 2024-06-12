import styled from "styled-components";
import { colors } from "./General";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ReadyPlay = styled.div`
  display: flex;
  gap: 3px;
`;

export const Ready = styled.span`
  color: ${colors.darkBlue};
  font-weight: 600;
  font-size: 15px;
`;

export const Play = styled.span`
  color: ${colors.darkOrange};
  font-weight: 600;
  font-size: 15px;
`;

export const ToggleContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 60px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const FireIcon = styled.img`
  height: 25px;
  border: 1px solid ${colors.darkOrange};
  border-radius: 50%;
  padding: 3px;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.9px solid ${colors.darkBlue};
  border-radius: 20px;
  padding: 10px 15px;
  gap: 20px;
  margin-top: 25px;
`;

export const TodaysGoal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Goal = styled.p`
  color: ${colors.darkBlue};
  font-size: 11px;
  font-weight: 500;
`;

export const CircularProgressBarCont = styled.div`
  width: 70px;
  height: 70px;
`;

export const PercentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StreakAdd = styled.div`
  display: flex;
  gap: 3px;
`;

export const FireNum = styled.p`
  color: ${colors.darkOrange};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
  align-items: center;
`;

export const HideScrollBar = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`;

export const LessonContainer = styled(HideScrollBar)`
  display: flex;
  gap: 2em;
  overflow-x: auto;
  margin-right: -20px;
`;

export const ContentBackground = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LessonBackground = styled(ContentBackground)`
  border-radius: 2em;
  height: 90px;
  width: 130px;
  margin-bottom: 0.4em;
`;

export const ProgressPercent = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ProgressMainDiv = styled.div`
  height: 7px;
  width: 100px;
  background-color: ${colors.lightBlue};
  border-radius: 12px;
`;
export const ProgressChildDiv = styled.div`
  height: 100%;
  width: 60%;
  background-color: ${colors.darkBlue};
  border-radius: 12px;
  text-align: left;
`;

export const SubHeader = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export const Frequency = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: gray;
  font-size: 12px;
`;

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  background-color: ${colors.ash};
  border-radius: 50%;
`;

export const Leaders = styled(HideScrollBar)`
  overflow-y: auto;
  padding-bottom: 5em;
`;

export const LeaderBackground = styled(ContentBackground)`
  width: 100%;
  border-radius: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 0.5em;
  margin-bottom: 1.2em;
`;

export const LeaderDetails = styled.div`
  display: flex;
  gap: 1em;
`;

export const LeaderImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 3px solid ${colors.lightOrange};
  object-fit: cover;
`;

export const LeaderNameCountry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    color: ${colors.ash};
    margin-top: -5px;
    font-size: 12px;
  }
`;
