import React from "react";
import home from "../assets/icons/home.svg";
import frequency from "../assets/icons/frequency.svg";
import persons from "../assets/icons/persons.svg";
import settings from "../assets/icons/settings.svg";
import { Footer } from "./styles/footer";

const FooterComp = ({ setActivePage }) => {
  return (
    <Footer>
      <img src={home} alt="" onClick={() => setActivePage("Home")} />
      <img src={frequency} alt="" onClick={() => setActivePage("Frequency")} />
      <img src={persons} alt="" onClick={() => setActivePage("Persons")} />
      <img src={settings} alt="" onClick={() => setActivePage("Settings")} />
    </Footer>
  );
};

export default FooterComp;
