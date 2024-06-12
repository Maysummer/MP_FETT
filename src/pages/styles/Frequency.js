import styled from "styled-components";
import { colors } from "./General";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.7em;
  align-items: center;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Day = styled.p`
  font-size: 12px;
  color: ${(props) => (props.$today ? colors.darkOrange : "black")};
`;

const NumBackground = styled.div`
  border-radius: 50%;
  width: 1.8em;
  height: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
`;

export const ImgWithBg = styled(NumBackground).attrs({ as: "img" })`
  background-color: ${colors.darkBlue};
`;

export const PWithBg = styled(NumBackground).attrs({ as: "p" })`
  background-color: ${(props) => (props.$today ? colors.darkOrange : "white")};
  color: ${(props) => (props.$today ? "white" : colors.darkBlue)};
  font-weight: 500;
`;

export const Dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: ${colors.darkBlue};
  border-radius: 50%;
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5em;
`;

export const SkillBackground = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1em 0;
  align-items: center;
  gap: 0.7em;
  border-radius: 2em;
`;

export const SKillImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkBlue};
  border-radius: 50%;
  width: 4.5em;
  height: 4.5em;
`;

export const SkillImg = styled.img`
  width: 2.2em;
  height: 2.2em;
  filter: invert(100%) brightness(200%);
`;

export const SkillName = styled.p`
  font-weight: 500;
`;

export const SkillPercent = styled.p`
  color: ${colors.ash};
  margin-top: -7px;
`;

export const Status = styled.p`
  font-weight: 500;
  padding: 0.2em 1em;
  border-radius: 2em;
  border: 1px solid ${colors.darkOrange};
  background-color: ${(props) =>
    props.status === "Completed" ? colors.darkOrange : "white"};
  color: ${(props) =>
    props.status === "Completed" ? "white" : colors.darkOrange};
`;
