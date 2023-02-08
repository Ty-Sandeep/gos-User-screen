import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import Gif from "../img/blower.gif";
function Endtime() {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return (
        <>
          <h1>You are good to go!</h1>
        </>
      );
    } else {
      // Render a countdown
      return (
        <div style={{backgroundImage: `url(${Gif})`}}>
          <div className="ends-in pb-4">Ends in</div>
          <div className="d-flex justify-content-center gap-4">
            <div className="d-flex flex-column pd-left ">
              <span className="times">
                {hours < 10 && hours >= 0 ? `0${hours}` : hours}
              </span>
              <span className="time-text">Hours</span>
            </div>
            <div className="d-flex flex-column pd-left">
              <span className="times">
                {minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes}
              </span>
              <span className="time-text">Minutes</span>
            </div>
            <div className="d-flex flex-column pd-left ">
              <span className="times">
                {seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds}
              </span>
              <span className="time-text">Seconds</span>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <Countdown date={Date.now() + 5000000} renderer={renderer} />
    </>
  );
}

export default Endtime;
