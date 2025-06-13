import React, { useEffect, useRef, useState } from 'react';
import './Ditgial.css'

function Digital() {

    const [time,setTime] = useState(new Date())
   

    useEffect (()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearTimeout(intervalId)
        }
    },[])


    const FormatTime =()=>{
        let hours =time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? 'pm':'am'

        hours = hours % 12 || 12;

        return `${hours}:${minutes} :${seconds} :${meridiem}`
    }


 

  return (
    <div className='clock_container'>
        <div clock>
          <span>{FormatTime()}</span>
        </div>
       
    </div>
  )
}

export default Digital