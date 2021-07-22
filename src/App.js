import './App.css';
import { useState,  } from 'react'
import Timer from './components/Timer';
import Button from './components/Button'
import { Container } from '@material-ui/core';

function App() {
  // const [timeInSeconds, setTimeInSeconds] = useState();
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

    console.log(time)
    setTimer(time)
  }
const handleClick =  (e)=>{
  e.preventDefault();
  let secs = e.target.value
  secondsToTime(+secs)
}

  return (
    <Container>
      <Timer timer={timer} />
      <Button   value={60}handleClick={handleClick} />
      <Button   value={320}handleClick={handleClick} />
      <Button   value={180}handleClick={handleClick} />
      
    </Container>
  );
}

export default App;
