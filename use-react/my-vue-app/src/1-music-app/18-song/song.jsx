import { useRef } from "react";
import Jetai from "../../resurses/JeTai.mp3";
import { useEffect } from "react";
import { useState } from "react";
const Song = ({ styles, information }) => {
  const music = useRef(new Audio(Jetai));
  const [play, setPlay] = useState(false);
  const [currents, setCurrent] = useState(0);
  const handlePlay = () => {
    setPlay(!play);
    console.log(play);
    if (play === true) {
      music.current.play();
    } else {
      music.current.pause();
    }
  };
  // Calculate minutes and seconds
  const min = Math.floor(music.current.duration / 60);
  const sec = Math.floor(music.current.duration % 60);
  const formattedTime = `${min}:${sec < 10 ? "0" : ""}${sec}`;
  const m = Math.floor(music.current.currentTime / 60);
  const s = Math.floor(music.current.currentTime % 60);
  const formattedCTime = `${m}:${s < 10 ? "0" : ""}${s}`;
  const timePass = () => {
    const s = music.current.currentTime / 60;
    setCurrent(s);
  };
  music.current.addEventListener("timeupdate", timePass);
  return (
    <div style={styles} className="songyso">
      <header className="header-with-3">
        <div onClick={information} className="goesDown">
          <div className="arrow-down">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="playing-from">
          <div className="theFirstWord">PLAYING FROM</div>
          <div className="thesecondWord">ABOUT ME2</div>
        </div>
        <div className="sittings-header">
          <div className="dots">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </header>
      <main className="Content-container">
        <div className="albom-song-picture"></div>
        <div className="aboutSongPlay">
          <div className="AddToFavorit">
            <i className="fa-regular fa-heart"></i>
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
            <audio
              id="jeTeLaisserai"
              src="./resurses/je te laisserai des mots slowed instrumental but Vince McMahon is sad (320 kbps).mp3"
            ></audio>
          </div>
          <div className="Time">
            <div className="TimeOfSong">{formattedCTime}</div>
            <div className="TimePassOfSong">{formattedTime}</div>
          </div>
        </div>
      </main>
      <footer className="Footer-with-5">
        <div className="ChoseHowsNext">
          <i className="fa-solid fa-shuffle"></i>
        </div>
        <div className="NEXTBEFORE">
          <div className="before">
            <i className="fa-sharp fa-solid fa-backward-step"></i>
          </div>
          {play ? (
            <div
              onClick={() => {
                handlePlay();
              }}
              className="stop"
            >
              <i className="fa-solid fa-play"></i>
            </div>
          ) : (
            <div
              onClick={() => {
                handlePlay();
              }}
              className="stop"
            >
              <i className="fa-solid fa-pause"></i>
            </div>
          )}

          <div className="Next">
            <i className="fa-sharp fa-solid fa-forward-step"></i>
          </div>
        </div>
        <div className="ChoseHowsNext2">
          <i className="fa-solid fa-repeat"></i>
        </div>
      </footer>
    </div>
  );
};
export default Song;
