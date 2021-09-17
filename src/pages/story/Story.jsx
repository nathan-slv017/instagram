import React from "react";

export default function Story(props) {
  const imgId = props.match.params.id;

  return (
    <>
      <p>Oi</p>
      <div
        style={{
          // backgroundImage: 'url("./../../dataBase/foto1.jpg")',
          backgroundColor: "black",
          width: "100px",
          height: "100px",
        }}
      ></div>
    </>
  );
}
