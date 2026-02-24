import React, { useEffect, useContext, useState } from "react";
import "../style/Timer.css";
import { ThemeProvider } from "../Provider/ContextProvider";
function Timer() {
  const {
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    time,
    setTime,
    bomb,
    setBomb,
  } = useContext(ThemeProvider);
  const [flag, setFlag] = useState(true);
  const [lose, setLose] = useState(false);
  useEffect(() => {
    if (time && bomb > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      if (seconds === -1 && minutes >= 1) {
        setMinutes(minutes - 1);
        setSeconds(seconds + 60);
      } else if (seconds === 1 && minutes === 0) {
        setTime(false);
      }
    }
    if (time && bomb === 0) {
      alert("you win");
      setFlag(false);
    }
    if (!time && bomb > 0) {
      console.log("hey");
      setLose(true);
      // alert("loser try again");
    }
  }, [minutes, seconds]);

  return (
    <section>
      {!flag && (
        <div className="win">
          <h1>winner</h1>
          <br />
          <h2>time left</h2>
          <br />
          <p>
            {minutes}:{seconds}
          </p>
        </div>
      )}
      {lose && (
        <div className="lose-msg">
          <h1>איזה לוזר</h1>
          <p className="lose-msg p ">
            {minutes}:{seconds}
          </p>
        </div>
      )}
      <div className="div-main">
        <div className="top">
          <img src="src\img\Screenshot 2026-02-24 121234.png" alt="icon-boom" />
          <h3>Bombs Remaining</h3>
        </div>
        <div className="bottom">
          <h1>{bomb}</h1>
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
