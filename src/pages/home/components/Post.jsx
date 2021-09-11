import React from "react";

import "./Post.css";

export default function Post(props) {
  console.log(props.children);
  return (
    <>
      <div className="post-Container">
        <div className="name-info">
          <div className="picture"></div>
          <p>nathan</p>
        </div>
      </div>
    </>
  );
}
