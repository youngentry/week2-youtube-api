import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const Subscribe = ({ mockData }) => {
  console.log(mockData);
  return (
    <div>
      <div>구독한 채널 목록</div>
      {mockData.map((data) => {
        return data.subscribe ? (
          <div>
            <strong>{data.snippet.channelTitle}</strong>
          </div>
        ) : (
          <div>{null}</div>
        );
      })}
    </div>
  );
};

export default Subscribe;
