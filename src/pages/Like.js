import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const Like = ({ mockData }) => {
  console.log(mockData);
  return (
    <div>
      <div>좋아요 표시한 동영상</div>
      {mockData.map((data) => {
        return data.like ? (
          <div>
            <div>
              <ReactPlayer className="videoPlayer" url={`https://www.youtube.com/embed/${data.id}&origin=http://localhost:3000/`} muted={true} playing={false} width="100%" height="100%" />
            </div>
            <strong></strong>
            {data.snippet.title}
          </div>
        ) : (
          <div>{null}</div>
        );
      })}
    </div>
  );
};

export default Like;
