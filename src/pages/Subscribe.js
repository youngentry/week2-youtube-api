import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import "../css/pages/Subscribe.scss";

const Subscribe = () => {
  const channelBaseUrl = "https://www.youtube.com/channel/";
  const subscribeList = useSelector((state) => state.subscribeListSlice);

  console.log(subscribeList);
  return (
    <div className="subscribe">
      <h2>구독한 채널 목록</h2>
      {subscribeList.map((subscribedChannel, index) => {
        return subscribedChannel ? (
          <div key={index}>
            <a href={`${channelBaseUrl}${subscribedChannel.channelId}`} target="_blank">
              {subscribedChannel.title}
            </a>
          </div>
        ) : (
          <div key={index}>{null}</div>
        );
      })}
    </div>
  );
};

export default Subscribe;
