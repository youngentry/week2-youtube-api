import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { getChannelRecentVideos } from "../YoutubeApi";

const RecentVideos = ({ channelId }) => {
  const VIDEO_AMOUNT = 4;

  const [videoArray, setVideoArray] = useState([]);

  //   useEffect(() => {
  //     (async () => {
  //       const recentVideoData = await getChannelRecentVideos(channelId, VIDEO_AMOUNT);
  //       setVideoArray([...recentVideoData]);
  //       console.log(videoArray);
  //     })();
  //   }, []);

  return (
    <div>
      {videoArray?.length ? (
        videoArray.map((video) => {
          console.log(video, "video");
          return (
            <div key={video.id.videoId}>
              <ReactPlayer className="videoPlayer" url={`https://www.youtube.com/embed/${video.id.videoId}&origin=http://localhost:3000/`} muted={false} playing={false} width="100%" height="100%" />
              <span>{video.snippet.title}</span>
            </div>
          );
        })
      ) : (
        <div>채널에 동영상이 존재하지 않습니다.</div>
      )}
    </div>
  );
};

export default RecentVideos;
