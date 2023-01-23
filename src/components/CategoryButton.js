import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../css/components/CategoryButton.scss";

const CategoryButton = ({ name, icon, pathTo }) => {
  const navigate = useNavigate();
  // 현재 버튼 강조하기
  return (
    <div className={`category-button ${"isHighlighted"}`} onClick={() => navigate(pathTo)}>
      <div className="side-box">
        <i>{icon}</i>
        <span> {name}</span>
      </div>
    </div>
  );
};

export default CategoryButton;
