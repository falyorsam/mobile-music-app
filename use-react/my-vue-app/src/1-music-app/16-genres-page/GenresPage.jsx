const SittingsSong = ({ handleClick }) => {
  return (
    <div className="page" id="page7">
      <div className="container">
        <div
          onClick={() => {
            handleClick();
          }}
          className="geme"
        >
          <div className="insideTheGENE">
            <div>
              <i className="fa-solid fa-guitar"></i>
            </div>

            <div>5 genre</div>
            <div className="show">28 Songs</div>
          </div>
          <img
            className="PLAYSS"
            src="https://picsum.photos/200"
            alt="songPic"
          />
        </div>
      </div>
    </div>
  );
};
export default SittingsSong;
