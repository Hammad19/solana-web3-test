import React from "react";

export default function ButtonGroups({ selectedType, setSelectedType }) {
  return (
    <div
      style={{
        background: "transparent",
        //align left
        textAlign: "left",
      }}
      class="btn-group"
      role="group"
      aria-label="Basic example">
      <button
        onClick={() => {
          setSelectedType("1H");
        }}
        type="button"
        class="btn btn-secondary"
        style={{
          background: selectedType === "1H" ? "gray" : "transparent",

          border: "0px solid transparent",
          color: "lightgray",
        }}>
        1H
      </button>
      <button
        onClick={() => {
          setSelectedType("1D");
        }}
        type="button"
        class="btn btn-secondary"
        style={{
          background: selectedType === "1D" ? "gray" : "transparent",

          border: "0px solid transparent",
          color: "lightgray",
        }}>
        1D
      </button>
      <button
        onClick={() => {
          setSelectedType("1W");
        }}
        type="button"
        class="btn btn-secondary"
        style={{
          background: selectedType === "1W" ? "gray" : "transparent",

          border: "0px solid transparent",
          color: "lightgray",
        }}>
        1W
      </button>
      <button
        onClick={() => {
          setSelectedType("1M");
        }}
        type="button"
        class="btn btn-secondary"
        style={{
          background: selectedType === "1M" ? "gray" : "transparent",

          border: "0px solid transparent",
          color: "lightgray",
        }}>
        1M
      </button>
      <button
        onClick={() => {
          setSelectedType("1Y");
        }}
        type="button"
        class="btn btn-secondary"
        style={{
          backgroundColor: selectedType === "1Y" ? "gray" : "transparent",

          border: "0px solid transparent",
          color: "lightgray",
        }}>
        1Y
      </button>
    </div>
  );
}
