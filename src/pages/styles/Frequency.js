import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
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

export const SkillBackground = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1em 3em;
`;

export const SkillImg = styled.img`
  border-radius: 50%;
  width: 3em;
  height: 3em;
  padding: 10px;
`;

export const Status = styled.p`
  padding: 1em;
  border-radius: 2em;
  background-color: red;
`;
