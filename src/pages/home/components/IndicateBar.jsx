import React from "react";

import "./IndicateBar.css";
import DataBase from "../../../DataBase.json";

export default function IndicateBar() {
  return (
    <div className="indicate-bar-container">
      <div className="c">
        <div className="profile-picture" />
        <div className="username">
          <div>{DataBase.posts[0].name}</div>
          <div>{DataBase.posts[0].username}</div>
        </div>
      </div>
      <div className="switch">switch</div>
    </div>
  );
}
