const Sort = () => {
  return (
    <div className="sortTheSongs">
      <div className="closeSort"></div>
      <div className="SortSongCont">
        <div className="sortOrder">sort order</div>
        <div className="SortBy">
          <div className="sortItBy sortItByTitle">title</div>
          <div className="sortItBy sortItByArtist">artist</div>
          <div className="sortItBy sortItByAlbum">album</div>
          <div className="sortItBy sortItByAlbumArtist">album artist</div>
          <div className="sortItBy sortItByComposer">composer</div>
          <div className="sortItBy sortItBySize">size</div>
          <div className="sortItBy sortItByYear">year</div>
          <div className="sortItBy sortItByDateAdded">date added</div>
          <div className="sortItBy sortItByDateModified">date modified</div>
        </div>
      </div>
    </div>
  );
};
export default Sort;
