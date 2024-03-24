import Song from "../18-song/song";
import { data } from "../../data";
const SongPage = ({ information, lInfo, setIt }) => {
  return (
    <div className="page" id="page2">
      <main className="container">
        <div className="countSong-date">
          <div className="countSong">29 Songs</div>
          <div
            onClick={() => {
              setIt();
            }}
            className="sort ClickSort"
          >
            <div className="THESORTNAME">date added</div>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        {data.map((e) => {
          return (
            <div key={e.id} className="songContainer">
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
              <div
                onClick={() => {
                  lInfo();
                }}
                className="songSittings"
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};
export default SongPage;
