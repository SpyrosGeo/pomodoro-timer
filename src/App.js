import './App.css';
import { useState, useEffect } from 'react'
import Timer from './components/Timer';
import { Container } from '@material-ui/core';

function App() {
  const [timeInSeconds,setTimeInSeconds] = useState();
  const [timer, setTimer] = useState({})
  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60))

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let time = {
      hours,
      minutes,
      seconds
    }

    setTimer(time)

  }


  return (
    <Container>
      <Timer timer={timer} />
    </Container>
  );
}

export default App;
