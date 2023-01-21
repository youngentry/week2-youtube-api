import React from "react";
import MainFilter from "../components/MainFilter";
import VideoCard from "../components/VideoCard";
import "../css/pages/Main.scss";

const mockVideo = [
  {
    id: 1,
    image: "이미지",
    title: "제목",
    description: "설명",
    name: "채널명",
    picture: "❤",
    view: "조회수",
    date: "1일전",
  },
  {
    id: 2,
    image: "이미지",
    title: "제목",
    description: "설명",
    name: "채널명",
    picture: "❤",
    view: "조회수",
    date: "1일전",
  },
  {
    id: 3,
    image: "이미지",
    title: "제목",
    description: "설명",
    name: "채널명",
    picture: "❤",
    view: "조회수",
    date: "1일전",
  },
  {
    id: 4,
    image: "이미지",
    title: "제목",
    description: "설명",
    name: "채널명",
    picture: "❤",
    view: "조회수",
    date: "1일전",
  },
  {
    id: 5,
    image: "이미지",
    title: "제목",
    description: "설명",
    name: "채널명",
    picture: "❤",
    view: "조회수",
    date: "1일전",
  },
];

const Main = () => {
  return (
    <div className="main">
      <MainFilter />
      <ul className="video-list">
        {mockVideo.map((el) => {
          return <VideoCard mockVideo={el} />;
        })}
      </ul>
    </div>
  );
};

export default Main;
