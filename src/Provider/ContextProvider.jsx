import React, { createContext, useState } from "react";

const ThemeProvider = createContext();
function ContextProvider({ children }) {
  const [cubeList, setCubeList] = useState([]);
  const [bomb, setBomb] = useState(10);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(true);

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
      }}
    >
      {children}
    </ThemeProvider>
  );
}

export { ContextProvider, ThemeProvider };
