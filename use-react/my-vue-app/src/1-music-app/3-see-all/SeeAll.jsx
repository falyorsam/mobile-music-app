import { data } from "../../data";
const SeeAll = ({ handleClick, styles }) => {
  return (
    <div style={styles} className="seeAllPage-sage">
      <div className="seeAllPage">
        <div className="Chsl">
          <div
            onClick={() => {
              handleClick();
            }}
            className="closeSeeAll"
          >
            <div className="closeAll">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </div>
            <div className="dotsee">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="seeAllSongInfoAndPic">
            <div className="albumPics-4">
              <div className="albumPics-2">
                <img
                  width="100px"
                  src="
                  https://picsum.photos/200"
                  alt=""
                ></img>
                <img width="100px" src="https://picsum.photos/200" alt=""></img>
              </div>
              <div className="albumPics-2">
                <img
                  width="100px"
                  src="
                  https://picsum.photos/200"
                  alt=""
                ></img>
                <img width="100px" src="https://picsum.photos/200" alt=""></img>
              </div>
            </div>
            <div className="SeeAllText">
              <div className="Text">resentPlayed</div>
              <div className="Time">29 songs 3:20:21</div>
            </div>
          </div>
          <div className="playSitt">
            <div className="playAllOrShiffle">
              <i className="fa-solid fa-play"></i>
              <div>PLAY ALL</div>
            </div>
            <div className="playAllOrShiffle">
              <i className="fa-solid fa-shuffle"></i>
              <div>SHUFFLE</div>
            </div>
          </div>
        </div>
        <div className="containerSortIt">
          {data.map((e) => {
            return (
              <div key={e.id} className="songContainers">
                <div
                  className="songHlf"
                  onClick={() => {
                    information();
                  }}
                >
                  <img
                    className="songPic"
                    src="https://picsum.photos/200"
                    width="50px"
                    height="50px"
                    alt="songPic"
                  />
                  <div className="SongText">
                    <div className="songName songInfo1">
                      <div className="songNameText">{e.name}</div>
                    </div>
                    <div className="songInfo songInfo2">
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
            );
          })}{" "}
        </div>
        {/* 
          <div className="songHlf">
            <img
              className="songPic"
              src="https://picsum.photos/200"
              width="50px"
              height="50px"
              alt="songPic"
            ></img>
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
            <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
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
            ></img>
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
            <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default SeeAll;
