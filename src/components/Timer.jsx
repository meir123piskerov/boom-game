import React, { useEffect, useState } from "react";

import "./Timer.css";
function Timer() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(3);
  const [time, setTime] = useState(true);
  useEffect(() => {
    if (time) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      if (seconds === 0 && minutes >= 1) {
        setMinutes(minutes - 1);
        setSeconds(seconds + 59);
      } else if (seconds === 1 && minutes === 0) {
        setTime(false);
      }
    }
  }, [minutes, seconds]);

  return (
    <section>
      <div className="div-main">
        <div className="top">
          <img src="src\img\Screenshot 2026-02-24 121234.png" alt="icon-boom" />
          <h3>Bombs Remaining</h3>
        </div>
        <div className="bottom">
          <h1>5</h1>
        </div>
      </div>
      <div className="div-main">
        <div className="top">
          <img src="src\img\Screenshot 2026-02-24 121244.png" alt="icon-time" />
          <h3>Time Remaining</h3>
        </div>
        <div className="bottom">
          <h1>
            {minutes}:{seconds}
          </h1>
        </div>
      </div>
      <div className="div-main">
        <div className="top">
          <img
            src="src\img\Screenshot 2026-02-24 121250.png"
            alt="board-icon"
          />
          <h3>Board Size</h3>
        </div>
        <div className="bottom">
          <h1>10 x 8</h1>
        </div>
      </div>
    </section>
  );
}

export default Timer;
