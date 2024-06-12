import styled from "styled-components";

export const colors = {
  darkBlue: "#6572bb",
  lightBlue: "#cad0f0",
  darkOrange: "#ff8b53",
  lightOrange: "#FFD3BE",
  ash: "#a4a4a4"
};

export const Page = styled.div`
  padding: 30px 20px 0 20px;
`;

export const Arrow = styled.img`
  border: 1.9px solid ${colors.darkBlue};
  border-radius: 5px;
  padding: 4px;
`;

export const HeaderText = styled.p`
  font-size: large;
  font-weight: 600;
`;
