const ArtistPage = () => {
  return (
    <div className="page" id="page4">
      <div className="container">
        <div className="songContainer">
          <div className="songHlf">
            <img
              className="songPicalbum"
              src="https://picsum.photos/200"
              width="60px"
              height="60px"
              alt="songPic"
            />
            <div className="SongText ">
              <div className="songName">david villa</div>
              <div className="songInfo fixSpace">
                <div className="songCreator">1 album</div>.
                <div className="addTime">1 song</div>
              </div>
            </div>
          </div>
          <div className="songSittings">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtistPage;
