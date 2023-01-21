import React from "react";
import "../css/components/NavSide.scss";
import CategoryButton from "./CategoryButton";

const categoryButtonName = [
  { icon: "🤍", name: "홈" },
  { icon: "🤍", name: "좋아요" },
  { icon: "🤍", name: "싫어요" },
  { icon: "🤍", name: "구독" },
];
const subscribe = [];

const NavSide = () => {
  return (
    <div className="nav-side">
      <div className="side-container">
        {categoryButtonName.map((el) => {
          return <CategoryButton name={el.name} icon={el.icon} />;
        })}
      </div>
      <div className="side-container">
        <strong>구독</strong>
        {subscribe.length ? (
          subscribe.map((el) => {
            return <div>있음</div>;
          })
        ) : (
          <div>없음</div>
        )}
      </div>
    </div>
  );
};

export default NavSide;
