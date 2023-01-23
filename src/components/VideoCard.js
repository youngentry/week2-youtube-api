import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router";
import "../css/components/VideoCard.scss";

const VideoCard = ({ mockVideo }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/video/${mockVideo.id}`, { state: { mockVideo } })} className="video-card">
      <div className="thumbnailBox">
        <img src={`${mockVideo.snippet.thumbnails.medium.url}`} alt="" />
        <ReactPlayer
          className="videoPlayer"
          url={`https://www.youtube.com/embed/${mockVideo.id}&origin=http://localhost:3000/`}
          muted={true}
          playing={playVideo}
          width="100%"
          height="100%"
          onMouseOver={() => setPlayVideo(true)}
          onMouseLeave={() => setPlayVideo(false)}
        />
      </div>
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
  );
};

export default VideoCard;
