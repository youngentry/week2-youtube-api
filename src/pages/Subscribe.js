import React from "react";
import { useSelector } from "react-redux";
import RecentVideos from "../components/RecentVideos";
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
            <a href={`${channelBaseUrl}${subscribedChannel.channelId}`} target="_blank" rel="noreferrer">
              {subscribedChannel.title}
            </a>
            <RecentVideos channelId={subscribedChannel.channelId} />
          </div>
        ) : (
          <div key={index}>{null}</div>
        );
      })}
    </div>
  );
};

export default Subscribe;
