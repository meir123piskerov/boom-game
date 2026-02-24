import "./App.css";
import Timer from "./components/Timer";
import Header from "./components/Header";
import Board from "./components/Board";
import Middle from "./components/middle";
import "./style/Header.css";
import { ContextProvider } from "./Provider/ContextProvider";
import ButtonReset from "./components/ButtonReset";



function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Timer />
        <Middle />
        <Board />

        <ButtonReset></ButtonReset>


      </ContextProvider>
    </>
  );
}
export default App;
