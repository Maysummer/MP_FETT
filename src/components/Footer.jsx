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
      <img
        onClick={() => setActivePage("Home")}
        width={21}
        alt=""
        src={activePage === "Home" ? homeb : home}
        className={activePage === "Home" ? "active" : ""}
      />
      <img
        src={activePage === "Frequency" ? frequencyb : frequency}
        width={21}
        alt=""
        onClick={() => setActivePage("Frequency")}
        className={activePage === "Frequency" ? "active" : ""}
      />
      <img src={persons} alt="" />
      <img src={settings} alt="" />
    </Footer>
  );
};

export default FooterComp;
