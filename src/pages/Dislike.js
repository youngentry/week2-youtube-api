import React from "react";
import ReactPlayer from "react-player";

const Dislike = ({ mockData }) => {
  console.log(mockData);
  return (
    <div>
      <div>싫어요 표시한 동영상</div>
      {mockData.map((data) => {
        return data.dislike ? (
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

export default Dislike;
