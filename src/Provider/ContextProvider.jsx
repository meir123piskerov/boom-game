import React, { createContext, useState } from "react";

const ThemeProvider = createContext();
function ContextProvider({ children }) {
  const [cubeList, setCubeList] = useState([]);
  const [bomb, setBomb] = useState(10);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [time, setTime] = useState(true);
  const [counter, setCounter] = useState(0)


  return (
    <ThemeProvider
      value={{
        cubeList,
        setCubeList,
        bomb,
        setBomb,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        time,
        setTime,
        counter,
        setCounter,
      }}
    >
      {children}
    </ThemeProvider>
  );
}

export { ContextProvider, ThemeProvider };
