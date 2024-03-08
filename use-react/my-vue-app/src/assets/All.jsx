import Nav from "./1-nav";
import Container from "./2-container";
import FUNC from "./3-footer.jsx";

const All = () => {
  const { Footer, like, setLike } = FUNC();
  return (
    <div>
      <Footer like={like} setLike={setLike} />
      <Nav />
      <Container />
    </div>
  );
};

export default All;
