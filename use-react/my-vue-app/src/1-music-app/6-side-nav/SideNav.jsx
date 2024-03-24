const SideNav = ({ handleClick, styles }) => {
  return (
    <div style={styles} className="audioNavSideBar">
      <div className="sideBar">
        <div className="sideBar-5 pd-0">
          <div className="audiofirst">
            <div className="audioTextSideBar">Audio</div>
            <div className="themeAndSittings">
              <div className="theme">
                <i className="fa-solid fa-palette"></i>
              </div>
              <div className="sittingsSteam">
                <i className="fa-solid fa-gear"></i>
              </div>
            </div>
          </div>
          <div className="audioSecSideBar icon">
            <div className="accountSy">
              <i className="fa-solid fa-id-badge"></i>
            </div>
            <div className="accountText">sloyakodav</div>
          </div>
        </div>
        <div className="sideBar-5">
          <div className="icon">
            <i className="fa-solid fa-book-open"></i>
            <div>audioBooks</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-scissors"></i>
            <div>mp3 cutter</div>
          </div>
        </div>
        <div className="sideBar-5">
          <div className="icon">
            <i className="fa-solid fa-mobile-screen"></i>

            <div>nearby share</div>
          </div>
          <div className="icon">
            <i className="fa-regular fa-clock"></i>

            <div>timer</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-chart-simple"></i>

            <div>equalizer</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-file"></i>
            <div>find copy</div>
          </div>
          <div className="icon">
            <i className="fa-brands fa-nfc-directional"></i>
            <div>scan</div>
          </div>
        </div>
        <div className="sideBar-5">
          <div className="icon">
            <i className="fa-brands fa-youtube"></i>
            <div>youtube</div>
          </div>
          <div className="icon">
            <i className="fa-brands fa-spotify"></i>
            <div>spotify</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
            <div>song identifier</div>
          </div>
        </div>
        <div className="sideBar-5">
          <div className="icon">
            <i className="fa-solid fa-circle-info"></i>

            <div>about</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-thumbs-up"></i>
            <div>rate us</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-message"></i>
            <div>feedback</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-share-nodes"></i>
            <div>share app</div>
          </div>
          <div className="icon">
            <i className="fa-solid fa-right-from-bracket"></i>
            <div>quit</div>
          </div>
        </div>
        <div className="facebookInsta">
          <div className="logos">
            <div className="icon">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-discord"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="logos">
            <div className="version">v1.0.0</div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          handleClick();
        }}
        className="closeSideBar"
      ></div>
    </div>
  );
};
export default SideNav;
