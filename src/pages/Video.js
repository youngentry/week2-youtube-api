import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import VideoCard from "../components/VideoCard";
import "../css/pages/Video.scss";
import { addSubscribe, setDislike, setLike, setPopularVideo, setSubscribe } from "../store/store";

const Video = () => {
  const popularVideo = useSelector((state) => state.popularVideo);
  const dispatch = useDispatch();
  const {
    state: { mockVideo },
  } = useLocation();

  const tempListIndex = popularVideo.findIndex((data) => data.id === mockVideo.id);
  const [isLike, setIsLike] = useState(popularVideo[tempListIndex].isLike);
  const [isDislike, setIsDislike] = useState(popularVideo[tempListIndex].isDislike);
  const [isSubscribed, setIsSubscribed] = useState(popularVideo[tempListIndex].isSubscribed);

  const subscribe = () => {
    setIsSubscribed(!isSubscribed);
    dispatch(addSubscribe({ title: mockVideo.snippet.channelTitle, channelId: mockVideo.snippet.channelId }));
  };

  useEffect(() => {
    dispatch(setLike({ tempListIndex, isLike }));
    dispatch(setDislike({ tempListIndex, isDislike }));
    dispatch(setSubscribe({ tempListIndex, isSubscribed }));
    console.log(mockVideo);
  }, [isSubscribed, isLike, isDislike]);
  return (
    <div className="video">
      <ReactPlayer className="videoPlayer" url={`https://www.youtube.com/embed/${mockVideo.id}&origin=http://localhost:3000/`} muted={false} playing={true} width="100%" height="100%" />
      <div className="info">
        <div className="titleBox">
          <strong className="title">{mockVideo.snippet.title}</strong>
        </div>
        <div className="infoBox">
          <div className="channelInfoBox">
            <div className="name">{mockVideo.snippet.channelTitle}</div>
            <div className="subscribers">구독자수 1.11천명</div>
          </div>

          <div className="activity">
            {isSubscribed ? (
              <div
                className={`subscribe highlighted`}
                onClick={() => {
                  if (window.confirm(`정말로 ${mockVideo.snippet.channelTitle} 구독을 취소하시겠습니까?`)) {
                    setIsSubscribed(!isSubscribed);
                  }
                }}
              >
                구독중
              </div>
            ) : (
              <div className={`subscribe`} onClick={() => subscribe()}>
                구독
              </div>
            )}

            <div
              className={`like ${isLike ? "highlighted" : null}`}
              onClick={() => {
                setIsLike(!isLike);
                setIsDislike(false);
              }}
            >
              👍좋아요
            </div>
            <div
              className={`dislike ${isDislike ? "highlighted" : null}`}
              onClick={() => {
                setIsDislike(!isDislike);
                setIsLike(false);
              }}
            >
              👎싫어요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
