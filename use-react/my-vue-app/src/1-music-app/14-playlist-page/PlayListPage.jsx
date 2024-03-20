const PlayListPage = () => {
  return (
    <div className="page" id="page5">
      <div className="container">
        <div className="fourCont">
          <div className="towC">
            <div className="mostP">
              <div className="insideSong">
                <div className="MostText">
                  <div className="firstText">Most Played</div>
                  <div className="secText">28 Songs</div>
                </div>
                <i className="fa-solid fa-circle-play"></i>
              </div>
              <img
                className="PLAYSS"
                src="https://picsum.photos/200"
                alt="songPic"
              />
            </div>
            <div className="lastA">
              <div className="insideSong">
                <div className="MostText">
                  <div className="firstText">Most Played</div>
                  <div className="secText">28 Songs</div>
                </div>
                <i className="fa-solid fa-circle-play"></i>
              </div>
              <img
                className="PLAYSS"
                src="https://picsum.photos/200"
                alt="songPic"
              />
            </div>
          </div>
          <div className="towC">
            <div className="recentlyP">
              <div className="insideSong">
                <div className="MostText">
                  <div className="firstText">Most Played</div>
                  <div className="secText">28 Songs</div>
                </div>
                <i className="fa-solid fa-circle-play"></i>
              </div>
              <img
                className="PLAYSS"
                src="https://picsum.photos/200"
                alt="songPic"
              />
            </div>
            <div className="favoritesP">
              <div className="insideSong">
                <div className="MostText">
                  <div className="firstText">Most Played</div>
                  <div className="secText">28 Songs</div>
                </div>
                <i className="fa-solid fa-circle-play"></i>
              </div>
              <img
                className="PLAYSS"
                src="https://picsum.photos/200"
                alt="songPic"
              />
            </div>
          </div>
        </div>
        <div className="SecCont">
          <div className="playlistSec">
            <div className="playText">
              <div className="playText">PLAYLIST</div>
              <div className="plusAndDots">
                <div className="plus">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div className="dot">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
            <div className="createP">
              <div className="JustifyIcon">
                <div className="iconMusic">
                  <i className="fa-solid fa-music"></i>
                </div>
              </div>

              <p className="NoP">No Playlist</p>

              <div className="JustifyIcon">
                <div className="createPlaylist">
                  <i className="fa-solid fa-plus"></i>
                  Create Playlist
                </div>
              </div>
              <div className="JustifyIcon">
                <div className="restorePlaylist">
                  <i className="fa-solid fa-rotate-left"></i>
                  Restore Playlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayListPage;
