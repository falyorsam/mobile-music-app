//////////////////////////////
import SideBar from "./1-music-app/6-side-nav/SideNav.jsx";
import Page from "./z-page/page.jsx";
import "./App.css";
import MyContext from "./z-page/UseContextComp.jsx";
import { useEffect, useRef, useState } from "react";
//////////////////////////////
// console.log();
function App() {
  const [rate, setRate] = useState(-0);
  const AddMe = () => {
    setRate(rate * 2);
  };

  return (
    <div>
      <MyContext.Provider value={rate}>
        <Page ratio={rate} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
