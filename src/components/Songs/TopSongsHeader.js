import React from "react";

export default function TopSongsHeader(props) {
  return (
    <div className="row">
      <div
        className="col-12 my-3 col-sm-12 col-md-12 col-lg-12"
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
        }}>
        <h1 className="text-white">{props.header}</h1>
      </div>
    </div>
  );
}
