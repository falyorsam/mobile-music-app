// Page.jsx

import React, { useRef, useState } from "react";

const Page = ({ logStyles }) => {
  // console.log("me");
  const componentRef = useRef(null);
  /////////////////////////////////
  const [stylesPage, setStylesPage] = useState({
    suggested: {},
    songs: {
      padding: "0.5rem",
      color: "white",
      borderBottom: "2px solid yellow",
    },
    album: {},
    artist: {},
    playlist: {},
    folders: {},
    genres: {},
  });

  /////////////////////////////////
  const logComponentStyles = (e) => {
    const paramter = e.currentTarget.textContent;
    // console.log(paramter);
    // console.log(paramter);
    const styles = componentRef.current.style.transform;
    ////////////////////////////
    if (e.currentTarget.textContent === "suggested") {
      const foldersStyle = `translateX(-0%)`;
      logStyles(styles, foldersStyle);
      setStylesPage({
        suggested: {
          padding: "0.5rem",
          color: "white",
          borderBottom: "2px solid yellow",
        },
        songs: {},
        album: {},
        artist: {},
        playlist: {},
        folders: {},
        genres: {},
      });
    } else if (e.currentTarget.textContent === "songs") {
      const foldersStyle = `translateX(-14.28%)`;
      logStyles(styles, foldersStyle);
      setStylesPage({
        suggested: {},
        songs: {
          padding: "0.5rem",
          color: "white",
          borderBottom: "2px solid yellow",
        },
        album: {},
        artist: {},
        playlist: {},
        folders: {},
        genres: {},
      });
    } else if (e.currentTarget.textContent === "albums") {
      const foldersStyle = `translateX(-28.56%)`;
      logStyles(styles, foldersStyle);
      setStylesPage({
        suggested: {},
        songs: {},
        album: {
          padding: "0.5rem",
          color: "white",
          borderBottom: "2px solid yellow",
        },
        artist: {},
        playlist: {},
        folders: {},
        genres: {},
      });
    } else if (e.currentTarget.textContent === "artists") {
      const foldersStyle = `translateX(-42.84%)`;
      logStyles(styles, foldersStyle);
      setStylesPage({
        suggested: {},
        songs: {},
        album: {},
        artist: {
          padding: "0.5rem",
          color: "white",
          borderBottom: "2px solid yellow",
        },
        playlist: {},
        folders: {},
        genres: {},
      });
    } else if (e.currentTarget.textContent === "playlists") {
      const foldersStyle = `translateX(-57.12%)`;
      logStyles(styles, foldersStyle);
      setStylesPage({
        suggested: {},
        songs: {},
        album: {},
        artist: {},
        playlist: {
          padding: "0.5rem",
          color: "white",
          borderBottom: "2px solid yellow",
        },
        folders: {},
        genres: {},
      });
    } else if (e.currentTarget.textContent === "folders") {
      const foldersStyle = `translateX(-71.4%)`;
      logStyles(styles, foldersStyle);
      setStylesPage({
        suggested: {},
        songs: {},
        album: {},
        artist: {},
        playlist: {},
        folders: {
          padding: "0.5rem",
          color: "white",
          borderBottom: "2px solid yellow",
        },
        genres: {},
      });
    } else if (e.currentTarget.textContent === "genres") {
      const foldersStyle = `translateX(-85.68%)`;
      logStyles(styles, foldersStyle);
      setStylesPage({
        suggested: {},
        songs: {},
        album: {},
        artist: {},
        playlist: {},
        folders: {},
        genres: {
          padding: "0.5rem",
          color: "white",
          borderBottom: "2px solid yellow",
        },
      });
    }
  };
  // console.log(stylesPage.songs);
  return (
    <nav ref={componentRef} className="nav-7">
      <div
        style={stylesPage.suggested}
        onClick={(e) => {
          logComponentStyles(e);
        }}
        className="suggested nav-item1"
      >
        suggested
      </div>
      <div
        onClick={(e) => {
          logComponentStyles(e);
        }}
        className="songs nav-item2"
        style={stylesPage.songs}
      >
        songs
      </div>
      <div
        onClick={(e) => {
          logComponentStyles(e);
        }}
        className="albums nav-item3"
        style={stylesPage.album}
      >
        albums
      </div>
      <div
        onClick={(e) => {
          logComponentStyles(e);
        }}
        className="artists nav-item4"
        style={stylesPage.artist}
      >
        artists
      </div>
      <div
        onClick={(e) => {
          logComponentStyles(e);
        }}
        className="playlists nav-item5"
        style={stylesPage.playlist}
      >
        playlists
      </div>
      <div
        onClick={(e) => {
          logComponentStyles(e);
        }}
        className="forlders nav-item6"
        style={stylesPage.folders}
      >
        folders
      </div>
      <div
        onClick={(e) => {
          logComponentStyles(e);
        }}
        className="generes nav-item7"
        style={stylesPage.genres}
      >
        genres
      </div>
    </nav>
  );
};

export default Page;
