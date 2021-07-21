import React from 'react'
import {convertToMinutes} from '../util'
export default function Button({value,handleClick}) {

    let minutes = convertToMinutes(value)
    return (
        <div>
            <button  onClick={handleClick}value={value}>{minutes} min</button>
        </div>
    )
}
