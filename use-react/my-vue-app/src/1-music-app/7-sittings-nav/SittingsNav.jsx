const SittingsNav = ({ style, handleClick }) => {
  return (
    <div style={style} className="navSittingBox">
      <div className="flexContainer">
        <div
          onClick={() => {
            handleClick();
          }}
          className="justForFlex removeIT"
        ></div>
        <div className="sittings3box">
          <div className="sittingsOneBox">shuffle all</div>
          <div className="sittingsOneBox">
            <p>grid size</p>
            <i className="fa-solid fa-caret-right"></i>
          </div>
          <div className="sittingsOneBox">sittings</div>
        </div>
      </div>
      <div
        onClick={() => {
          handleClick();
        }}
        className="forFlexAlso removeIT"
      ></div>
    </div>
  );
};
export default SittingsNav;
