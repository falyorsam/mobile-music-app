const SittingsSong = ({ handleClick, styles, info }) => {
  return (
    <div style={styles} className="sittings-sage">
      <div
        onClick={() => {
          handleClick();
        }}
        className="cancelSittingsSage"
      ></div>
      <div className="sittingsSageContFor">
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
          <div className="songSittings bro">
            <div className="justCeruse"></div>
            <i className="fa-regular fa-heart bro"></i>
          </div>
        </div>
        <div className="firstCon">
          <div className="firstOne">
            <i className="fa-solid fa-arrow-right"></i>
            <p className="textFIRSTONE">Play Next</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-list-ul"></i>
            <p className="textFIRSTONE">Add to playing queue</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-circle-plus"></i>
            <p className="textFIRSTONE">Add to playlist</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-share"></i>
            <p className="textFIRSTONE">Nearby share</p>
          </div>
        </div>
        <div className="firstCon">
          <div className="firstOne">
            <i className="fa-solid fa-record-vinyl"></i>
            <p className="textFIRSTONE">Go to album</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-id-badge"></i>
            <p className="textFIRSTONE">Go to list</p>
          </div>
          <div className="firstOne">
            <i className="fa-brands fa-youtube"></i>
            <p className="textFIRSTONE">Go to artist</p>
          </div>
        </div>
        <div className="firstCon">
          <div className="firstOne">
            <i className="fa-solid fa-pen"></i>
            <p className="textFIRSTONE">Find on youtube</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-circle-info"></i>
            <p className="textFIRSTONE">Tag editor</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-scissors"></i>
            <p className="textFIRSTONE">Details</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-phone"></i>
            <p className="textFIRSTONE">Mp3 editor</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-circle-minus"></i>
            <p className="textFIRSTONE">Add to black list</p>
          </div>
        </div>
        <div className="firstCon">
          <div className="firstOne">
            <i className="fa-solid fa-share-nodes"></i>
            <p className="textFIRSTONE">share</p>
          </div>
          <div className="firstOne">
            <i className="fa-solid fa-trash"></i>
            <p className="textFIRSTONE">Delete from device</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SittingsSong;
