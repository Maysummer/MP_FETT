import React from "react";
import home from "../assets/icons/home.svg";
import frequency from "../assets/icons/frequency.svg";
import persons from "../assets/icons/persons.svg";
import settings from "../assets/icons/settings.svg";
import { Footer } from "./styles/footer";

const FooterComp = () => {
  return (
    <Footer>
      <img src={home} alt="" />
      <img src={frequency} alt="" />
      <img src={persons} alt="" />
      <img src={settings} alt="" />
    </Footer>
  );
};

export default FooterComp;
