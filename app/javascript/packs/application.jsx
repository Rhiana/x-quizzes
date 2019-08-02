import React from "react";
import ReactDOM from "react-dom";
import Base from "../components/base";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Base />,
    document.body.appendChild(document.createElement("div"))
  );
});
