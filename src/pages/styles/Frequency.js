import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.7em;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Day = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => (props.$today ? "#ff8b53" : "black")};
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
  background-color: #6572bb;
`;

export const PWithBg = styled(NumBackground).attrs({ as: "p" })`
  background-color: ${(props) => (props.$today ? "#ff8b53" : "white")};
  color: ${(props) => (props.$today ? "white" : "#6572BB")};
  font-weight: 500;
`;

export const Dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: #6572bb;
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
  background-color: #6572bb;
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
  color: gray;
  margin-top: -7px;
`;

export const Status = styled.p`
  font-weight: 500;
  padding: 0.2em 1em;
  border-radius: 2em;
  border: 1px solid #ff8b53;
  background-color: ${(props) =>
    props.status === "Completed" ? "#ff8b53" : "white"};
  color: ${(props) => (props.status === "Completed" ? "white" : "#ff8b53")};
`;
