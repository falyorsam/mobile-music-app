const Nav = () => {
  return (
    <header className="header-with-3">
      <div className="goesDown">
        <div className="arrow-down">
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="playing-from">
        <div className="theFirstWord">PLAYING FROM</div>
        <div className="thesecondWord">ABOUT ME2</div>
      </div>
      <div className="sittings-header">
        <div className="dots">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </header>
  );
};
export default Nav;
