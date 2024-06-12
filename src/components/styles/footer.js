import styled from "styled-components";

export const Footer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top-right-radius: 1.5em;
  border-top-left-radius: 1.5em;
  padding: 1.5em 0;
  box-shadow: 0 -10px 20px #cad0f0;

  img {
    filter: invert(30%) sepia(7%) saturate(472%) hue-rotate(179deg) brightness(85%) contrast(83%);
  }

  img.active {
    filter: invert(43%) sepia(49%) saturate(492%) hue-rotate(193deg) brightness(97%) contrast(89%);
  }
`;
