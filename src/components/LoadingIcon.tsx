import React from "react";
import "../styles/LoadingIcon.css";

export default function LoadingIcon() {
  return (
    <div className="wrapper">
      <div className="lds-spinner center-align">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
