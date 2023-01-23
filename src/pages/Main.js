import axios from "axios";
import React, { useEffect, useState } from "react";
import MainFilter from "../components/MainFilter";
import VideoCard from "../components/VideoCard";
import "../css/pages/Main.scss";

const Main = ({ mockData }) => {
  const apiKey = process.env.API_KEP;
  const [list, setList] = useState(mockData);

  console.log(list);
  // useEffect(() => {
  //   axios
  //     .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${apiKey}`)
  //     .then((res) => {
  //       console.log(res);
  //       setList(res.data.items);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, []);
  // console.log(list);

  return (
    <div className="main">
      <MainFilter />
      <ul className="video-list">
        {list.map((el) => {
          return <VideoCard mockVideo={el} />;
        })}
      </ul>
    </div>
  );
};

export default Main;
