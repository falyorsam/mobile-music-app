import { useEffect, useRef, useState } from "react";
import Suggested from "./../1-music-app/10-suggested-page/SuggestedPage.jsx";
import SongPage from "./../1-music-app/11-song-page/SongPage.jsx";
import Album from "./../1-music-app/12-album-page/AlbumPage.jsx";
import Artist from "./../1-music-app/13-artist-page/ArtistPage.jsx";
import Playlist from "./../1-music-app/14-playlist-page/PlayListPage.jsx";
import Folders from "./../1-music-app/15-folders-page/FoldersPage.jsx";
import Genres from "./../1-music-app/16-genres-page/GenresPage.jsx";
import "./../App.css";
import MyContext from "./UseContextComp.jsx";
import Pagey from "./testy/pagey.jsx";
import Footer from "../1-music-app/17-footer/Footer.jsx";
import Nav from "../1-music-app/8-nav/Nav.jsx";
import Profile from "../1-music-app/4-profile/Profile.jsx";
const Page = (ratio) => {
  // console.log(ratio);
  const pageRef = useRef(null);
  // const comp = <Pagey></Pagey>;
  // console.log(comp.type);
  ///////////////////////////////////

  ///////////////////////////////////

  const [styles, setStyles] = useState({});
  const [rate, setRate] = useState();
  const logStyles = (styles, styley) => {
    setRate(styley);
  };
  ///////////////////////////////////
  //!NAV
  const [navy, setNavy] = useState(false);
  const HandleNav = () => {
    setNavy(!navy);
  };
  //!NAV-END
  // console.log(styles);
  //!PROFILE
  const [close, setClose] = useState({ transform: "translateY(10000px)" });
  const HandleProfile = () => {
    if (navy === true) {
      setClose({ transform: "translateY(0px)" });
    } else if (navy === false) {
      setClose({ transform: "translateY(10000px)" });
    }
  };
  //!PROFILE-END
  return (
    <MyContext.Provider value={rate}>
      <div>
        {/*  */}
        <Nav artists={HandleNav} Navy={navy} handleClick={HandleProfile} />

        <Profile
          closeProfile={HandleProfile}
          closeMe={close}
          showMe={navy}
          closeIt={HandleNav}
        />
        <Pagey logStyles={logStyles} />
      </div>
      <div ref={pageRef} style={{ transform: `${rate}` }} className="pages">
        <Suggested />
        <SongPage />
        <Album />
        <Artist />
        <Playlist />
        <Folders />
        <Genres />
      </div>
      <Footer />
    </MyContext.Provider>
  );
};

export default Page;
