import React from "react";
import home from "../assets/icons/home.png";
import homeb from "../assets/icons/homeb.png";
import frequency from "../assets/icons/frequency.png";
import frequencyb from "../assets/icons/frequencyb.png";
import persons from "../assets/icons/persons.svg";
import settings from "../assets/icons/settings.svg";
import { Footer } from "./styles/footer";

const FooterComp = ({ activePage, setActivePage }) => {
  return (
    <Footer>
      {console.log(activePage)}
      <img
        onClick={() => setActivePage("Home")}
        width={21}
        alt=""
        active={true}
        src={activePage === "Home" ? homeb : home}
      />
      <img
        src={activePage === "Frequency" ? frequencyb : frequency}
        active={activePage === "Frequency" ? true : false}
        width={21}
        alt=""
        onClick={() => setActivePage("Frequency")}
      />
      <img src={persons} alt="" />
      <img src={settings} alt="" />
    </Footer>
  );
};

export default FooterComp;
