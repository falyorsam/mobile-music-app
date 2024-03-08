import { useRef, useState } from "react";
import "./App.css";
import Nav from "./assets/1-nav";
import JeTai from "./resurses/JeTai.mp3";
function App() {
  const [pause, setPause] = useState(false);
  const [like_1, setLike_1] = useState(false);

  const handleTogglePlay = () => {
    const song = new Audio(JeTai);
    if (pause) {
      song.play();
    } else {
      song.pause();
    }
  };
  const Container = () => {
    return (
      <main className="Content-container">
        <div className="albom-song-picture"></div>
        <div className="aboutSongPlay">
          <div
            className="AddToFavorit"
            onClick={(e) => {
              setLike_1(!like_1);

              e.target.style.transform = "scale(1.2)";

              setTimeout(() => {
                e.target.style.transform = "scale(1)";
              }, 300);
            }}
          >
            {like_1 ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
          <div className="songInfos">
            <div className="NameOfSong">je te laisserai des mots</div>
            <div className="NameOfCreator">ABOUT ME</div>
          </div>

          <div className="anotherSongs">
            <i className="fa-solid fa-list"></i>
          </div>
        </div>
        <div className="songTimeLine">
          <div className="lineOfTheTime">
            <div className="timeline"></div>
          </div>
          <div className="Time">
            <div className="TimeOfSong">00:00</div>
            <div className="TimePassOfSong">00:00</div>
          </div>
        </div>
      </main>
    );
  };
  const Footer = () => {
    return (
      <footer className="Footer-with-5">
        <div className="ChoseHowsNext">
          <i className="fa-solid fa-shuffle"></i>
        </div>
        <div className="NEXTBEFORE">
          <div className="before">
            <i className="fa-sharp fa-solid fa-backward-step"></i>
          </div>

          <div
            onClick={(e) => {
              handleTogglePlay();
              setPause(!pause);
              e.target.style.transform = "scale(1.05)";

              setTimeout(() => {
                e.target.style.transform = "scale(1)";
              }, 300);
            }}
            className="stop"
          >
            {" "}
            {pause ? (
              <i className="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </div>
          <div className="Next">
            <i className="fa-sharp fa-solid fa-forward-step"></i>
          </div>
        </div>
        <div className="ChoseHowsNext2">
          <i className="fa-solid fa-repeat"></i>
        </div>
      </footer>
    );
  };
  return (
    <div>
      <Nav></Nav>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
