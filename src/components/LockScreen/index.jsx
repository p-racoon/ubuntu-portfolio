import React from "react";
import LockScreenClock from "./LockScreenClock";
import "./LockScreen.css";

export default function LockScreen() {
  return (
    <div className="LockScreen">
      <LockScreenClock />
    </div>
  );
}
