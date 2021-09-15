import React from "react";

import "./Story.css";

export default function Story({ fotos }) {
  console.log(fotos);
  return (
    <>
      <div className="story">
        <img src={fotos.default} />
      </div>
    </>
  );
}
