const Search = () => {
  return (
    <div className="search-sage">
      <div className="searchBar">
        <div className="searchsy">
          <div className="divInput">
            <div className="searchIcon">
              <i className="fa-brands fa-searchengin"></i>
            </div>
            <input className="InputSearch" type="text" placeholder="Search" />
            <div className="micSearch">
              <i className="fa-solid fa-microphone"></i>
            </div>
          </div>
        </div>
        <div className="close-searchBar">cancel</div>
      </div>
      <div className="empty"></div>
    </div>
  );
};
export default Search;
