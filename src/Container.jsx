import React from "react";

import "./Container.css";
import AppBar from "./pages/home/components/AppBar";

import Database from "./DataBase.json";

export default function Container() {
  console.log(Database);

  return (
    <>
      <div className="app-bar">
        <AppBar />
      </div>

      <div className="container">
        <div className="content">
          <div className="storys"></div>
          <div className="posts"></div>
        </div>

        <div className="indicate-bar">oi</div>
      </div>
    </>
  );
}
