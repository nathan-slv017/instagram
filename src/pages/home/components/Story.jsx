import React from "react";

import { Link } from "react-router-dom";

import "./Story.css";

export default function Story({ fotos, ordem }) {
  const storyPath = "/story" + ordem;

  return (
    <>
      <Link to={storyPath}>
        <div className="story">
          <img src={fotos.default} />
        </div>
      </Link>
    </>
  );
}
