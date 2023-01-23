import React, { useEffect, useState } from "react";
import "../css/components/NavSide.scss";
import CategoryButton from "./CategoryButton";

const categoryButtonName = [
  { icon: "🤍", name: "홈", pathTo: "/" },
  { icon: "🤍", name: "좋아요", pathTo: "/like" },
  { icon: "🤍", name: "싫어요", pathTo: "/dislike" },
  { icon: "🤍", name: "구독", pathTo: "/subscribe" },
];

const NavSide = ({ list }) => {
  const [subscribeList, setSubscribeList] = useState([
    ...list.filter((data) => {
      return data.subscribe;
    }),
  ]);

  useEffect(() => {
    setSubscribeList([
      ...list.filter((data) => {
        return data.subscribe;
      }),
    ]);
  }, [list]);
  return (
    <div className="nav-side">
      <div className="side-container">
        {categoryButtonName.map((button) => {
          return <CategoryButton name={button.name} icon={button.icon} pathTo={button.pathTo} />;
        })}
      </div>
      <div className="side-container">
        <strong>구독</strong>
        {subscribeList.length ? (
          subscribeList.map((channel) => {
            return <div>{channel.snippet.channelTitle}</div>;
          })
        ) : (
          <div>없음</div>
        )}
      </div>
    </div>
  );
};

export default NavSide;
