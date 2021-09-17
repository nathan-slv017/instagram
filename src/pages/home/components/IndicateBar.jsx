import React from "react";

import "./IndicateBar.css";
import DataBase from "../../../DataBase.json";

import { Link } from "react-router-dom";

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
      <div className="switch">
        <Link style={{ textDecoration: "none", color: "#0c9af6" }} to="/login">
          Switch
        </Link>
      </div>
    </div>
  );
}
