import React from "react";

import "./Container.css";

import AppBar from "./pages/home/components/AppBar";
import DataBase from "./DataBase.json";

import Post from "./pages/home/components/Post";
import IndicateBar from "./pages/home/components/IndicateBar";
import Story from "./pages/home/components/Story";

export default function Container() {
  const fotos = [
    require("../src/dataBase/foto1.jpg"),
    require("../src/dataBase/foto2.jpg"),
    require("../src/dataBase/foto3.jpg"),
    require("../src/dataBase/foto4.jpg"),
    require("../src/dataBase/foto5.jpg"),
    require("../src/dataBase/foto6.jpg"),
    require("../src/dataBase/foto7.jpg"),
    require("../src/dataBase/foto8.jpg"),
    require("../src/dataBase/foto9.jpg"),
    require("../src/dataBase/foto10.jpg"),
  ];

  return (
    <>
      <div className="app-bar">
        <AppBar />
      </div>

      <div className="container">
        <div className="content">
          <div className="storys">
            {fotos.map((foto) => (
              <Story fotos={foto} />
            ))}
          </div>
          <div className="posts">
            {fotos.map((foto, index) => (
              <Post foto={foto} descricao={DataBase.posts[index]} />
            ))}
          </div>
        </div>

        <div className="indicate-bar">
          <IndicateBar />
        </div>
      </div>
    </>
  );
}
