import { useContext } from "react";
import { ThemeProvider } from "../Provider/ContextProvider";
import { createBoard } from "../utils/creatBoard";
import "../style/ButtonReset.css";

function ButtonReset() {
  const {
    setCubeList,
    setCounter,
    setBomb,
    setSeconds,
    setMinutes,
    setLose,
    setFlag,
    setTime,
  } = useContext(ThemeProvider);
  function reset() {
    setCubeList(createBoard);
    setCounter((prev) => prev + 100);
    setBomb(10);
    setFlag(true);
    setLose(false);
    setMinutes(1);
    setSeconds(0);
    setTime(true);
  }

  return (
    <div>
      <button className="button-reset" onClick={reset}>
        Restart Game
      </button>
    </div>
  );
}

export default ButtonReset;
