const SongPage = () => {
  return (
    <div className="page" id="page2">
      <main className="container">
        <div className="countSong-date">
          <div className="countSong">29 Songs</div>
          <div className="sort ClickSort">
            <div className="THESORTNAME">date added</div>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className="songContainer">
          <div className="songHlf">
            <img
              className="songPic"
              src="https://picsum.photos/200"
              width="50px"
              height="50px"
              alt="songPic"
            />
            <div className="SongText">
              <div className="songName">je te lasserai des moi</div>
              <div className="songInfo">
                <div className="songCreator">casmas linx</div>
                <div className="addTime">7 days ago</div>
                <div className="TimeOfSong">3:05</div>
              </div>
            </div>
          </div>
          <div className="songSittings">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SongPage;
