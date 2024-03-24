import { useContext } from "react";
import MyContext from "../../z-page/UseContextComp";
const Nav = (artist) => {
  // console.log(artists);
  const { Navy, artists, handleClick, sittings, search, dots } = artist;
  return (
    <MyContext.Provider value={artists.artists}>
      <nav className="nav-5">
        <div className="nav-5FirstContainer">
          <div
            onClick={() => {
              sittings();
            }}
            className="sittings"
          >
            <i className="fa-solid fa-list-ul"></i>
          </div>
          <div className="nameOfApp bro">Musical</div>
        </div>
        <div className="nav-5secContainer">
          <div
            onClick={() => {
              search();
            }}
            className="search"
          >
            <div className="insideToClick insideToClick_1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div
            onClick={(e) => {
              artists();
              handleClick();
              console.log(Navy);
            }}
            className="pro"
          >
            <div className="insideToClick">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <div
            onClick={() => {
              dots();
            }}
            className="dots"
          >
            <div className="insideToClick">
              <i className="fa-solid fa-ellipsis-vertical NavSittingsButton"></i>
            </div>
          </div>
        </div>
      </nav>
    </MyContext.Provider>
  );
};
export default Nav;
