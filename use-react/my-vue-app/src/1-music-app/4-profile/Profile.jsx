import React from "react";
import MyContext from "../../z-page/UseContextComp";
function Profile({ closeProfile, closeMe, showMe, closeIt }) {
  return (
    <MyContext.Provider value={showMe}>
      <div style={closeMe} className="profile-sage">
        <div className="profileCont">
          <div className="cover">
            <div
              onClick={() => {
                closeProfile();
                closeIt();
              }}
              className="closeProfile"
            >
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </div>
          </div>
          <div className="controleIt">
            <div className="profilePic"></div>
          </div>
          <div className="name">
            <div className="profileName">brahim</div>
            <div className="username">@sloyakodav</div>
          </div>
          <div className="achievement">
            achievement
            <div className="padges">
              <div className="iconys">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <div>listener of the year</div>
            </div>
          </div>
          <div className="bio">This guy loves music and coding</div>
          <div className="contsSlides">
            <div className="songsCreated">Songs</div>
            <div className="favoritSv">favorite</div>
            <div className="followingArtist">follow</div>
          </div>

          <div className="profileSlides-1">
            <div className="FirstTY">
              <div
                className="songCreatorOnes"
                style={{ padding: "3rem", textTransform: "capitalize" }}
              >
                <div className="songy" style={{ textAlign: "center" }}>
                  no songs yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default Profile;
