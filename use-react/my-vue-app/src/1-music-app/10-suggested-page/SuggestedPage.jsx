import React from "react";

const SuggestedPage = ({ handleClick, styles }) => {
  return (
    <div className="page" id="page1">
      <main className="container">
        <div className="ResentContainer">
          <div className="resentPlayed countSong-date">
            <div className="resentText countSong">recently played</div>
            <div
              onClick={() => {
                handleClick();
              }}
              className="seeALl sort"
            >
              See all
            </div>
          </div>
          <div className="musicScroll">
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg musicBack">
                <img
                  className="MusicImg GEMAI"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
                <p className="textmore">
                  More
                  <i className="fa-solid fa-chevron-right"></i>
                </p>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mostPlayedContainer">
          <div className="mostPlayed countSong-date">
            <div className="mostPlayedText countSong">Most Played</div>
            <div
              onClick={() => {
                handleClick();
              }}
              className="seeALl sort"
            >
              SEE ALL
            </div>
          </div>
          <div className="musicScroll">
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg musicBack">
                <img
                  className="MusicImg GEMAI"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
                <p className="textmore">
                  More
                  <i className="fa-solid fa-chevron-right"></i>
                </p>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
          </div>
        </div>
        <div className="favoriteContainer">
          <div className="favoriteC  countSong-date ">
            <div className="favoritText countSong">favorite</div>
            <div
              onClick={() => {
                handleClick();
              }}
              className="seeALl sort"
            >
              SEE ALL
            </div>
          </div>
          <div className="musicScroll">
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
            <div className="OneMusic">
              <div className="musicImg">
                <img
                  className="MusicImg"
                  src="https://picsum.photos/200"
                  width="125px"
                  alt="musicImg"
                ></img>
              </div>
              <div className="MusicText">
                <div className="songName SSSS"> je te lasserai des mots</div>
                <div className="songInfo">casmas linx</div>
              </div>
            </div>
          </div>
        </div>
        <div className="favoriteContainer">
          <div className="favoriteC">
            <div className="favoritText"></div>
            <div className="seeALl"></div>
          </div>
          <div className="musicScroll">
            <div className="OneMusic">
              <div className="musicImg"></div>
              <div className="MusicText">
                <div className="songName"></div>
                <div className="songInfo"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="containerD">
          <div className="countSong-date">
            <div className="countSong">last added</div>
            <div
              onClick={() => {
                handleClick();
              }}
              className="seeALl sort"
            >
              SEE ALL
            </div>
          </div>
          <div className="songScroll">
            <div className="firstScrollPage">
              <div className="scrollOne">
                <div className="songContainer widthFix">
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
              </div>
              <div className="scrollOne">
                <div className="songContainer widthFix">
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
              </div>
              <div className="scrollOne">
                <div className="songContainer widthFix">
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
              </div>
            </div>
            <div className="secondScrollPage">
              <div className="scrollOne">
                <div className="songContainer widthFix">
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
              </div>
              <div className="scrollOne">
                <div className="songContainer widthFix">
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
              </div>
              <div className="scrollOne">
                <div className="songContainer widthFix">
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
              </div>
            </div>
            <div className="thereScrollPage">
              <div className="scrollOne">
                <div className="songContainer widthFix">
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuggestedPage;
