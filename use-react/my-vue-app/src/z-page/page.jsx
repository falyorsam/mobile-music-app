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
///////////////////////////////////
import Song from "../1-music-app/18-song/song.jsx";
///////////////////////////////////
import SideNav from "../1-music-app/6-side-nav/SideNav.jsx";
///////////////////////////////////
import Search from "../1-music-app/5-search/Search.jsx";
///////////////////////////////////
import SittingsNav from "../1-music-app/7-sittings-nav/SittingsNav.jsx";
///////////////////////////////////
import SeeAll from "../1-music-app/3-see-all/SeeAll.jsx";
///////////////////////////////////
import SittingsSong from "./../1-music-app/2-sittings-song/sittings-song.jsx";
///////////////////////////////////
import Sort from "../1-music-app/1-sort-song/sort.jsx";
///////////////////////////////////

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
  //!music
  const [showMusic, setShowMusic] = useState(false);
  const [showMusicStyle, setShowMusicStyle] = useState({
    transform: "translateY(10000px)",
  });
  const ShowMusicApp = () => {
    setShowMusic(!showMusic);
    if (showMusic === true) {
      setShowMusicStyle({ transform: "translateY(0px)" });
    } else if (showMusic === false) {
      setShowMusicStyle({ transform: "translateY(10000px)" });
    }
  };
  //!music end
  //!sideNav ///////////////////////
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSideBarStyle, SetShowSideBarStyle] = useState({
    transform: "translateX(-10000px)",
  });
  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
    if (showSideBar === true) {
      SetShowSideBarStyle({ transform: "translateX(0px)" });
    } else if (showSideBar === false) {
      SetShowSideBarStyle({ transform: "translateX(-10000px)" });
    }
  };
  //!SideNav end ///////////////////////
  //////////////////////////////////////
  //!search ///////////////////////
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchStyle, SetShowSearchStyle] = useState({
    display: "none",
  });
  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch === true) {
      SetShowSearchStyle({ display: "block" });
    } else if (showSearch === false) {
      SetShowSearchStyle({ display: "none" });
    }
  };
  //!search end ///////////////////////
  /////////////////////////////////////
  //////////////////////////////////////
  //!search ///////////////////////
  const [ShowSittings, setShowSittings] = useState(false);
  const [ShowSittingsStyle, SetShowSittingsStyle] = useState({
    transform: "translateY(-10000px)",
  });
  const handleShowSittings = () => {
    setShowSittings(!ShowSittings);
    if (ShowSittings === true) {
      SetShowSittingsStyle({ transform: "translateY(-10000px)" });
    } else if (ShowSittings === false) {
      SetShowSittingsStyle({ transform: "translateY(0px)" });
    }
  };
  //!SeeAll end ///////////////////////
  /////////////////////////////////////
  //!SeeAll ///////////////////////

  const [ShowSeeAll, setShowSeeAll] = useState(false);
  const [ShowSeeAllStyle, SetShowSeeAllStyle] = useState({
    transform: "translateY(10000px)",
  });
  const handleShowSeeAll = () => {
    setShowSeeAll(!ShowSeeAll);
    if (ShowSeeAll === true) {
      SetShowSeeAllStyle({ transform: "translateY(10000px)" });
    } else if (ShowSeeAll === false) {
      SetShowSeeAllStyle({ transform: "translateY(0px)" });
    }
  };
  //!search end ///////////////////////
  //!SeeAll ///////////////////////

  const [ShowSittingsSong, setSittingsSong] = useState(false);
  const [ShowSittingsSongStyle, SetShowSittingsSongStyle] = useState({
    transform: "translateY(10000px)",
  });
  const handleShowSittingsSong = () => {
    setSittingsSong(!ShowSittingsSong);
    if (ShowSittingsSong === true) {
      SetShowSittingsSongStyle({ transform: "translateY(10000px)" });
    } else if (ShowSittingsSong === false) {
      SetShowSittingsSongStyle({ transform: "translateY(0px)" });
    }
  };
  //!search end ///////////////////////
  //!SeeAll ///////////////////////

  const [ShowSort, setShowSort] = useState(false);
  const [ShowSortStyle, SetShowSortStyle] = useState({
    transform: "translateY(10000px)",
  });
  const handleShowSort = () => {
    setShowSort(!ShowSort);
    if (ShowSort === true) {
      SetShowSortStyle({ transform: "translateY(10000px)" });
    } else if (ShowSort === false) {
      SetShowSortStyle({ transform: "translateY(0px)" });
    }
  };
  //!search end ///////////////////////
  return (
    <MyContext.Provider value={rate}>
      <div>
        {/*  */}
        <Sort style={ShowSortStyle} handleClick={handleShowSort} />
        <SittingsSong
          styles={ShowSittingsSongStyle}
          handleClick={handleShowSittingsSong}
          info={ShowSittingsSong}
        />
        <SeeAll handleClick={handleShowSeeAll} styles={ShowSeeAllStyle} />
        <SittingsNav
          style={ShowSittingsStyle}
          handleClick={handleShowSittings}
        />
        <Search
          styles={showSearchStyle}
          handleClick={handleShowSearch}
          info={showSearch}
        />
        <SideNav handleClick={handleShowSideBar} styles={showSideBarStyle} />
        <Song styles={showMusicStyle} information={ShowMusicApp} />
        <Nav
          artists={HandleNav}
          Navy={navy}
          handleClick={HandleProfile}
          sittings={handleShowSideBar}
          search={handleShowSearch}
          dots={handleShowSittings}
        />

        <Profile
          closeProfile={HandleProfile}
          closeMe={close}
          showMe={navy}
          closeIt={HandleNav}
        />
        <Pagey logStyles={logStyles} />
      </div>
      <div ref={pageRef} style={{ transform: `${rate}` }} className="pages">
        <Suggested handleClick={handleShowSeeAll} styles={ShowSeeAllStyle} />
        <SongPage
          information={ShowMusicApp}
          lInfo={handleShowSittingsSong}
          setIt={handleShowSort}
        />
        <Album handleClick={ShowMusicApp} />
        <Artist
          handleClick={ShowMusicApp}
          handleSittings={handleShowSittingsSong}
        />
        <Playlist handleClick={handleShowSeeAll} />
        <Folders />
        <Genres handleClick={handleShowSeeAll} />
      </div>
      <Footer />
    </MyContext.Provider>
  );
};

export default Page;
