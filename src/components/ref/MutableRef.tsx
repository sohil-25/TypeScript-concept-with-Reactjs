import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {

    const [timer, setTimer] = useState(0)
    const interValref = useRef<number | null>(null)

const stopTimer=()=>{
   if(interValref.current) {
    window.clearInterval(interValref.current)
}
}

    useEffect(() => {
      interValref.current = window.setInterval(()=>{
        setTimer((timer)=>timer+1)
      },1000)
    
      return () => {
        stopTimer()
      }
    }, [])
    

    return(
        <div>
            HookTimer - {timer} -
            <button onClick={stopTimer} >Stop Timer</button>
        </div>
    )
}