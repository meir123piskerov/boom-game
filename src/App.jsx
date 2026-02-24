import "./App.css";
import Timer from "./components/Timer";
import Header from "./components/Header";
import Board from "./components/Board";
import "./style/Header.css";
import Middle from "./components/middle";
function App() {
  return (
    <>
      <Header />
      <Timer />
      <Middle />
      <Board />
    </>
  );
}

export default App;
