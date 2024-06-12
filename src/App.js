import HomePage from "./pages/HomePage";
import FooterComp from "./components/Footer";
import Frequency from "./pages/Frequency";
import React, { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState("Home");
  return (
    <div className="App">
      {activePage === "Home" && <HomePage name="Rachel" />}
      {activePage === "Frequency" && <Frequency />}
      <FooterComp activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
