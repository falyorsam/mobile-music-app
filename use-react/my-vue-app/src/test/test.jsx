import React, { useState } from "react";
import File3Component from "./like";

const Footer = ({ like, setLike }) => {
  return (
    <div>
      <button
        onClick={() => {
          setLike(!like);
        }}
      >
        {like ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

const MyFunction = () => {
  const [like, setLike] = useState(false);
  return { Footer, like, setLike };
};

export default MyFunction;
