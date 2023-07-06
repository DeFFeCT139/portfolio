import { useEffect, useState } from 'react';
import style from './css/timer.module.css'

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0)
  const [state, setState] = useState(false)

  const getPadTime = (time) => time.toString().padStart(2, '0')

  const hourse = getPadTime(Math.floor(timeLeft / 3600))
  const minutes = getPadTime(Math.floor((timeLeft - hourse * 3600) / 60))
  const secundes = getPadTime((timeLeft - hourse * 3600) - minutes * 60)

  useEffect(()=>{
    const interval = setInterval(() => {
      state &&
        setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft -1 :0)
    }, 1000);

    if (timeLeft === 0) setState(false)

    return () => {
      clearInterval(interval)
    }
  }, [state, timeLeft])

  const setTime = (hourse, minutes, secundes) => {
    let hourseSecond = Number(hourse * 3600)
    let minutesSecond = Number(minutes * 60)
    let secundesSecond = Number(secundes)
    console.log(hourseSecond + minutesSecond + secundesSecond)
    return hourseSecond + minutesSecond + secundesSecond
  }

  const clickStart = () => {
    setState(true)
    let hourse = document.getElementById('hourse').value
    let minutes = document.getElementById('minutes').value
    let secundes = document.getElementById('secundes').value

    setTimeLeft(setTime(hourse, minutes, secundes))
  }

  const clickStop = () => {
    setState(false)
  }
  const clickClear = () => {
    setState(false)
    setTimeLeft(0)
    document.getElementById('hourse').value = ''
    document.getElementById('minutes').value = ''
    document.getElementById('secundes').value = ''
  }

  return (
    <div className={style.timer}>
      <div className={style.timerInnerBlock}>
        <div className={style.timerBlock}>
          <div className={style.timerNumber}><span>{hourse}</span>:<span>{minutes}</span>:<span>{secundes}</span></div>
          <div className={style.timerSetings}>
            <div className={style.timerInputs}>
              <input id='hourse' maxLength='2' className={style.timerInput} type="number"/>
              <div className={style.timerInputText}>:</div>
              <input id='minutes' maxLength='2' className={style.timerInput} type="number"/>
              <div className={style.timerInputText}>:</div>
              <input id='secundes' maxLength='2' className={style.timerInput} type="number"/>
            </div>
            <div className={style.timerBtns}>
              <button onClick={clickStart} className={style.timerBtn}>Start</button>
              <button onClick={clickStop} className={style.timerBtn}>Stop</button>
              <button onClick={clickClear} className={style.timerBtn}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;