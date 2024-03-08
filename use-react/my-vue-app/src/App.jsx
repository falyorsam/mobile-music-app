import { useEffect, useRef, useState } from "react";
import "./App.css";
import useSound from "use-sound";
import Nav from "./assets/1-nav";
import jeTe from "./resurses/JeTai.mp3";
import JeTai from "./resurses/JeTai.mp3";
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [width, setWidth] = useState(0);

  const audioRef = useRef(new Audio(jeTe));
  const formatTime = (S) => {
    const min = Math.floor(S / 60);
    const remaningSec = Math.floor(S % 60);
    const formattedTime = `${min}:${remaningSec < 10 ? "0" : ""}${remaningSec}`;

    return formattedTime;
  };
  useEffect(() => {
    const widthS = audioRef.current.currentTime / audioRef.current.duration;
    console.log(Math.floor(widthS * 100));
    setWidth(widthS * 100);
  }, [currentTime]);
  useEffect(() => {
    const onTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      audioRef.current.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);
  const togglePlay = () => {
    if (pause) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const [pause, setPause] = useState(false);
  const [like_1, setLike_1] = useState(false);

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
            <div
              style={{
                width: `${width}%`,
              }}
              className="timeline"
            ></div>
          </div>
          <div className="Time">
            <div className="TimeOfSong">{formatTime(currentTime)}</div>
            <div className="TimePassOfSong">
              {formatTime(audioRef.current.duration)}
            </div>
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
              togglePlay();
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
