import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
export default function Timer({ timer }) {
    const {hours,minutes,seconds} = timer;
    //Convert seconds to Time
    // const [secs, setSecs] = useState(0)
    // const [mins, setMins] = useState(0)
    // const [hs, setHs] = useState(0)

    

    return (
     <CountdownCircleTimer
     
     duration={10}
     isPlaying
     initialRemainingTime={minutes}
     colors={[
        ['#004777', 0.33],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
     >

     </CountdownCircleTimer> 
    )
}
