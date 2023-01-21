import React from "react";
import "../css/components/VideoCard.scss";

const VideoCard = ({ mockVideo }) => {
  console.log({ mockVideo });
  return (
    <>
      <li className="video-card">
        <img src="" alt="" />
        이미지
        <div className="info">
          <div className="picture"> {mockVideo.picture}</div>
          <div className="text">
            <p className="title">{mockVideo.title}</p>
            <span className="name">{mockVideo.name}</span>
            <div className="other">
              <div className="view">{mockVideo.view}</div>
              <div className="date">{mockVideo.date}</div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default VideoCard;
