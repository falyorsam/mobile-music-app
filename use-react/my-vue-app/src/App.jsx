import { useEffect, useRef, useState } from "react";
import "./App.css";
import useSound from "use-sound";
import Nav from "./assets/song-place/1-nav";
import jeTe from "./resurses/JeTai.mp3";
import JeTai from "./resurses/JeTai.mp3";
import All from "./assets/All";
import Body from "./assets/song-place/2-body";
import Main from "./assets-main/body/body.jsx";
function App() {
  const [sep, setSpe] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setSpe(!sep);
        }}
      >
        click to check
      </button>
      {/* <Nav></Nav>
      <Container></Container>
      <Footer></Footer> */}
      {/* {sep ? <All></All> : <Main></Main>} */}
      <Main></Main>
    </div>
  );
}

export default App;
