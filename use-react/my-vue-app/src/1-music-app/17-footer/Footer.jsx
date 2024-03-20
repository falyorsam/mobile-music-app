const Footer = () => {
  return (
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
  );
};
export default Footer;
