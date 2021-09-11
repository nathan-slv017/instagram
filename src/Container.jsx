import React from "react";

import "./Container.css";
import AppBar from "./pages/home/components/AppBar";

export default function Container() {
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
