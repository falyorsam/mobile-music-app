import React, { useEffect } from "react";
import myFunction from "./test.jsx";

const File3Component = () => {
  const { like } = myFunction();
  useEffect(() => {
    console.log(like);
  }, [like]);
  return <div>{`${like}`}</div>;
};
export default File3Component;
