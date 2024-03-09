import { useState } from "react";
const Footer = ({ like, setLike }) => {
  return (
    <footer className="Footer-with-5">
      <div className="ChoseHowsNext">
        <i className="fa-solid fa-shuffle"></i>
      </div>
      <div className="NEXTBEFORE">
        <div className="before">
          <i className="fa-sharp fa-solid fa-backward-step"></i>
        </div>

        <div
          onClick={(e) => {
            setLike(!like);
            e.target.style.transform = "scale(1.05)";

            setTimeout(() => {
              e.target.style.transform = "scale(1)";
            }, 300);
          }}
          className="stop"
        >
          {" "}
          {like ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </div>
        <div className="Next">
          <i className="fa-sharp fa-solid fa-forward-step"></i>
        </div>
      </div>
      <div className="ChoseHowsNext2">
        <i className="fa-solid fa-repeat"></i>
      </div>
    </footer>
  );
};
const FUNC = () => {
  const [like, setLike] = useState(false);
  return { Footer, like, setLike };
};

export default FUNC;
