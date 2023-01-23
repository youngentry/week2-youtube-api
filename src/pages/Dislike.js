import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const Dislike = () => {
  const popularVideo = useSelector((state) => state.popularVideo);

  return (
    <div>
      <div>싫어요 표시한 동영상</div>
      {popularVideo.map((data, index) => {
        return data.isDislike ? (
          <div key={index}>
            <div>
              <ReactPlayer className="videoPlayer" url={`https://www.youtube.com/embed/${data.id}&origin=http://localhost:3000/`} muted={true} playing={false} width="100%" height="100%" />
            </div>
            <strong></strong>
            {data.snippet.title}
          </div>
        ) : (
          <div key={index}>{null}</div>
        );
      })}
    </div>
  );
};

export default Dislike;
