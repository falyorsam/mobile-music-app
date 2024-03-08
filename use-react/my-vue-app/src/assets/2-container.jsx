import { useEffect, useState } from "react";
import FUNC from "./3-footer";
const Container = () => {
  const [like_1, setLike_1] = useState(false);
  const { like } = FUNC();
  useEffect(() => {
    console.log(like);
  }, [like]);
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
          <audio
            id="jeTeLaisserai"
            src="./../../../../mobile-first-music-app-/resurses/je te laisserai des mots slowed instrumental but Vince McMahon is sad (320 kbps).mp3"
          ></audio>
        </div>
        <div className="Time">
          <div className="TimeOfSong">00:00</div>
          <div className="TimePassOfSong">00:00</div>
        </div>
      </div>
    </main>
  );
};
export default Container;
