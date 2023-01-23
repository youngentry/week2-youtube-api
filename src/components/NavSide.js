import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/components/NavSide.scss";
import { addSubscribe, setSubscribe } from "../store/store";
import CategoryButton from "./CategoryButton";

const categoryButtonName = [
  { icon: "🤍", name: "홈", pathTo: "/" },
  { icon: "🤍", name: "좋아요", pathTo: "/like" },
  { icon: "🤍", name: "싫어요", pathTo: "/dislike" },
  { icon: "🤍", name: "구독", pathTo: "/subscribe" },
];

const NavSide = () => {
  const channelBaseUrl = "https://www.youtube.com/channel/";
  const subscribeListSlice = useSelector((state) => state.subscribeListSlice);

  useEffect(() => {
    console.log(subscribeListSlice);
  }, [subscribeListSlice]);

  return (
    <div className="nav-side">
      <div className="side-container">
        {categoryButtonName.map((button, index) => {
          return <CategoryButton key={index} name={button.name} icon={button.icon} pathTo={button.pathTo} />;
        })}
      </div>
      <div className="side-container">
        <strong>구독</strong>
        {subscribeListSlice.length ? (
          subscribeListSlice.map((channel, index) => {
            return (
              <div key={index} className="subscribe-side-list">
                <a href={`${channelBaseUrl}${channel.channelId}`} target="_blank">
                  {channel.title}
                </a>
              </div>
            );
          })
        ) : (
          <div className="subscribe-side-list">없음</div>
        )}
      </div>
    </div>
  );
};

export default NavSide;
