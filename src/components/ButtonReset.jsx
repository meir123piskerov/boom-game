import { useContext } from 'react';
import { ThemeProvider } from '../Provider/ContextProvider';
import { createBoard } from '../utils/creatBoard';
import '../style/ButtonReset.css'


function ButtonReset() {
  const { setCubeList, setCounter, setBomb,
    setMinutes,

    setSeconds, } = useContext(ThemeProvider);
  function reset() {

    setCubeList(createBoard);
    setCounter(prev => prev + 100)
    setBomb(10)
    setMinutes(1)
    setSeconds(1)
  }
  return (
    <div>
      <button className='button-reset' onClick={reset}>Restart Game</button>

    </div>
  );
}

export default ButtonReset;
