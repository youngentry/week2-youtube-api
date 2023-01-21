import React from "react";
import "../css/components/VideoCard.scss";

const VideoCard = ({ mockVideo }) => {
  console.log({ mockVideo });
  return (
    <>
      <li className="video-card">
        <img src={`${mockVideo.snippet.thumbnails.medium.url}`} alt="" />
        <div className="info">
          <div className="picture"> </div>
          <div className="text">
            <p className="title">{mockVideo.snippet.title}</p>
            <span className="name">{mockVideo.snippet.channelTitle}</span>
            <div className="other">
              <div className="view">{mockVideo.snippet.view}</div>
              <div className="date">{mockVideo.snippet.publishedAt}</div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default VideoCard;
