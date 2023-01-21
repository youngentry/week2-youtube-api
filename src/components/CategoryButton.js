import React from "react";
import "../css/components/CategoryButton.scss";

const CategoryButton = ({ name, icon }) => {
  return (
    <div className="category-button">
      <div className="side-box">
        <i>{icon}</i>
        <span> {name}</span>
      </div>
    </div>
  );
};

export default CategoryButton;
