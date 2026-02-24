import "./App.css";
import Timer from "./components/Timer";
import Header from "./components/Header";
import Board from "./components/Board";
import "./style/Header.css";
import { ContextProvider } from "./Provider/ContextProvider";
import ButtonReset from "./components/ButtonReset";

function App() {
  return (
    <>
      <ContextProvider>
        <Header></Header>
        <Timer></Timer>
        <Board />
        <ButtonReset></ButtonReset>
      </ContextProvider>
    </>
  );
}
export default App;
