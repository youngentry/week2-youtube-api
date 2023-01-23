import React from "react";
import { useLocation, useParams } from "react-router";
import VideoCard from "../components/VideoCard";
import "../css/pages/Video.scss";

const Video = () => {
  const {
    state: { mockVideo },
  } = useLocation();
  console.log(mockVideo);

  return (
    <div className="video">
      <iframe id="player" type="text/html" width="100%" height="80%" src={`http://www.youtube.com/embed/${mockVideo.id}`} />
      <div className="info">
        <div className="titleBox">
          <strong className="title">{mockVideo.snippet.title}</strong>
        </div>
        <div className="infoBox">
          <div className="channelInfoBox">
            <div className="name">{mockVideo.snippet.channelTitle}</div>
            <div className="subscribers">구독자수 1.11천명</div>
          </div>
          <div className="subscribe">
            <button>구독</button>
          </div>
          <div className="activity">
            <div className="like">👍좋아요</div>
            <div className="dislike">👎싫어요</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
