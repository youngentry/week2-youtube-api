import "./css/reset.css";
import NavSide from "./components/NavSide";
import NavHead from "./components/NavHead";
import Main from "./pages/Main";
import Video from "./pages/Video";
import Like from "./pages/Like";
import Dislike from "./pages/Dislike";
import Subscribe from "./pages/Subscribe";
import { Route, Router, Routes } from "react-router-dom";
import BodyWrapper from "./layout/BodyWrapper";

function App() {
  return (
    <div className="App">
      <NavHead />
      <BodyWrapper>
        <NavSide />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/video" element={<Video />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/like" element={<Like />} />
          <Route path="/dislike" element={<Dislike />} />
        </Routes>
      </BodyWrapper>
    </div>
  );
}

export default App;
