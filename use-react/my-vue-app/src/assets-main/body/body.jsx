import { data } from "../data";
import sing from "../../resurses/SnapTube Audio/Set Fire To The Rain x Another Love - PT_EN(MP3_160K).mp3";
import "./Body.css";
const Body = () => {
  return (
    <>
      <header className="header-2">
        <nav className="nav-5">
          <div className="nav-5FirstContainer">
            <div className="sittings">
              <i className="fa-solid fa-list-ul"></i>
            </div>
            <div className="nameOfApp">Musical</div>
          </div>
          <div className="nav-5secContainer">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="pro">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="dots">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
        </nav>
        <nav className="nav-7">
          <div className="suggested">suggested</div>
          <div className="songs">songs</div>
          <div className="albums">albums</div>
          <div className="artists">artists</div>
          <div className="playlists">playlists</div>
          <div className="forlders">folders</div>
          <div className="generes">genres</div>
        </nav>
      </header>
      <main className="container">
        <div className="countSong-date">
          <div className="countSong">29 Songs</div>
          <div className="sort">
            date added <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        {data.map((songs) => {
          return (
            <div key={songs.id} className="songContainer">
              <div className="songHlf">
                <img
                  className="songPic"
                  src="https://picsum.photos/200"
                  width="50px"
                  height="50px"
                  alt="songPic"
                />
                <div className="SongText">
                  <div
                    style={{
                      textShadow: "1px 2px 5px  rgba(255, 255, 255, 0.277)",
                    }}
                    className="songName"
                  >
                    {songs.name}
                  </div>
                  <div className="songInfo">
                    <div className="songCreator">random</div>
                    <div className="addTime">7 days ago</div>
                    <div className="TimeOfSong">3:05</div>
                  </div>
                </div>
              </div>
              <div className="songSittings">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          );
        })}
      </main>
      <footer className="footer-2">
        <div className="songFooterContainer">
          <div className="song2Container">
            <div className="SongText2">
              <img
                className="songPic"
                src="https://picsum.photos/200"
                width="40px"
                height="40px"
                alt="songPic"
              />
              <div className="info">
                <div className="songName">im creating</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="control">
              <div className="startPause">
                <i className="fa-solid fa-pause"></i>
              </div>
              <div className="listOfSongs">
                <i className="fa-solid fa-list-ul"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="lineOfSong">
          <div className="line"></div>
        </div>
        <div className="secondContainerOfFooter">
          <div className="audio">
            <i className="fa-solid fa-record-vinyl"></i>
          </div>
          <div className="video">
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Body;
