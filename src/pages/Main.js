import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainFilter from "../components/MainFilter";
import VideoCard from "../components/VideoCard";
import "../css/pages/Main.scss";

const Main = () => {
  const popularVideo = useSelector((state) => state.popularVideo);

  return (
    <div className="main">
      <MainFilter />
      <ul className="video-list">
        {popularVideo.map((el, index) => {
          return <VideoCard key={index} mockVideo={el} />;
        })}
      </ul>
    </div>
  );
};

export default Main;
