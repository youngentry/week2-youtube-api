import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
import "../css/components/VideoCard.scss";

const VideoCard = ({ mockVideo }) => {
  const [isPlayVideo, setIsPlayVideo] = useState(false);
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/video/${mockVideo.id}`, { state: { mockVideo } })} className="video-card">
      <div className="thumbnailBox" onMouseOver={() => setIsPlayVideo(true)} onMouseLeave={() => setIsPlayVideo(false)}>
        <img src={`${mockVideo.snippet?.thumbnails.medium.url}`} alt="" />
        <ReactPlayer className="videoPlayer" url={`https://www.youtube.com/embed/${mockVideo.id}&origin=http://localhost:3000/`} muted={true} playing={isPlayVideo} width="100%" height="100%" />
      </div>
      <div className="info">
        <div className="picture"> </div>
        <div className="text">
          <p className="title">{mockVideo.snippet?.title}</p>
          <span className="name">{mockVideo.snippet?.channelTitle}</span>
          <div className="other">
            <div className="view">{mockVideo.snippet?.view}</div>
            <div className="date">{mockVideo.snippet?.publishedAt}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
