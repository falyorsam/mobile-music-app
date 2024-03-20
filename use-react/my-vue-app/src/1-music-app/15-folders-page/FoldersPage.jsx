const FoldersPage = () => {
  return (
    <div className="page" id="page6">
      <div className="container">
        <div className="folderss">
          <div className="oneFolder">
            <div className="insinde">
              <i className="fa-solid fa-folder-open"></i>
              Directories
            </div>
          </div>
          <div className="oneFolder">
            <div className="iconCon insinde">
              <i className="fa-solid fa-folder"></i>
              recurses
            </div>
            <div className="dot">
              <i className="SMAll-me fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="oneFolder">
            <div className="insinde">
              <i className="fa-solid fa-folder-minus"></i>
              block
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoldersPage;
