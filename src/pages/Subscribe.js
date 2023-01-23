import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const Subscribe = () => {
  const popularVideo = useSelector((state) => state.popularVideo);
  return (
    <div>
      <div>구독한 채널 목록</div>
      {popularVideo.map((data, index) => {
        return data.isSubscribed ? (
          <div key={index}>
            <strong>{data.snippet.channelTitle}</strong>
          </div>
        ) : (
          <div key={index}>{null}</div>
        );
      })}
    </div>
  );
};

export default Subscribe;
