import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

const Like = () => {
  const popularVideo = useSelector((state) => state.popularVideo);

  console.log(popularVideo);

  return (
    <div>
      <div>좋아요 표시한 동영상</div>
      {popularVideo.map((data, index) => {
        return data.isLike ? (
          <div key={index}>
            <div>
              <ReactPlayer className="videoPlayer" url={`https://www.youtube.com/embed/${data.id}&origin=http://localhost:3000/`} muted={true} playing={false} width="100%" height="100%" />
            </div>
            <strong> {data.snippet.title}</strong>
          </div>
        ) : (
          <div key={index}>{null}</div>
        );
      })}
    </div>
  );
};

export default Like;
