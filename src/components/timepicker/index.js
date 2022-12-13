import React, { useState, useEffect, useRef } from 'react'
import Clock from './Clock'
import * as Icon from '../icons';

export default function TimePicker(props) {
  const [hour, setHour] = useState(12)
  const [min, setMin] = useState('00')
  const [am, setAm] = useState(false);
  const [isHour, setIsHour] = useState(true);
  const [showClock, setShowClock] = useState(false);
  const [to, setTo] = useState(false);
  const [fromTo, setFromTo] = useState([]);
  const hourDiv = useRef()
  const minDiv = useRef()

  const validHour = e =>{
    var bVal = e.target.value
    console.log(bVal)
    // if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) return
    bVal.length > 2? bVal = e.nativeEvent.data : bVal=bVal.replace(/^0+(?!\.|$)/, 0);
    bVal.length==2&&bVal<1?bVal='01':bVal.length==2&&bVal>12?bVal=12:bVal=bVal
    setHour(bVal)
  }
  const validMin = e =>{
    var bVal = e.target.value
    bVal.length > 2? bVal = e.nativeEvent.data : bVal=bVal.replace(/^0+(?!\.|$)/, 0);
    bVal.length==2&&bVal<1?bVal='00':bVal.length==2&&bVal>59?bVal=59:bVal=bVal
    setMin(bVal)
  }
  useEffect(()=>{
    setFromTo(arr => ({ ...arr, [to?'to':'from']: `${hour}:${min} ${am?'AM':'PM'}`}));
  },[hour, min, am, to])

  const setHourTo=()=>{
    setTo(true)
    setHour(12)
    setMin('00')
    setAm(false)
    setIsHour(true)
    hourDiv.current.focus()
  }
  const handleSubmit = ()=>{
    props.submit(fromTo)
  }
    return (
    <div className="d-flex center">

    <div className="timepicker">
      <div className="timepicker-header" style={{boxSizing:"content-box"}}>
        <div className="timepicker-title">
          {/* <div className={'title-wrapper'}> */}
          <div className="title">Enter {to?'to':'from'} Time</div>
          <div className={'header-btns'}>
            <div className={"btn btn-sm tpckr"} onClick={()=>props.submit({from:'Closed'})}>Closed</div>
            <div className={"btn btn-sm tpckr ok-btn"} onClick={()=>props.submit({from:'All Day'})}>All Day</div>
          </div>
          {/* </div> */}
        </div>
        <div className="timepicker-time">
          <input type='number' ref={hourDiv} className={`timepicker-hour${isHour?' active':''}`} onClick={()=>setIsHour(true)} onInput={(e)=>validHour(e)} readOnly={showClock} value={hour}/>
          <div className="timepicker-time-txt">Hour</div>
          <div className="timepicker-dots">:</div>  
          <div className="timepicker-time-txt min">Minutes</div>
          {/*<div ref={minDiv} className={`timepicker-minutes${!isHour?' active':''}`} onClick={()=>setIsHour(false)} onInput={(e)=>validMin(e.target.innerText)} contentEditable={!showClock} suppressContentEditableWarning={true}>{min}</div>*/}
          <input type='number' ref={minDiv} className={`timepicker-minutes${!isHour?' active':''}`} onClick={()=>setIsHour(false)} onChange={(e)=>validMin(e)} readOnly={showClock} value={min}/>
        </div>
      <div className="timepicker-time-type">
        <div onClick={()=>setAm(true)} className={`timepicker-mode time-am${am?' active':''}`}>AM</div>    
        <div onClick={()=>setAm(false)} className={`timepicker-mode time-pm${!am?' active':''}`}>PM</div>    
      </div>
      </div>
      {showClock&&(<Clock min={min} hour={hour} setmin={(e)=>setMin(e)} sethour={(e)=>setHour(e)} isHour={isHour}/>)}
      <div className="timepicker-footer">
      <div className="timepicker-btns">
        <div className="btn btn-sm tpckr" onClick={()=>setShowClock(e=>!e)}>{showClock?<Icon.Keyboard/>:<Icon.Clock/>}</div>
      </div>
      <div className="timepicker-btns">
        <div className="btn btn-sm tpckr" style={{marginRight:'.5rem'}} onClick={()=>props.hide()}>CANCEL</div>
        <div className="btn btn-sm tpckr" onClick={()=>!to?setHourTo():handleSubmit()}>{!to?'NEXT':'OK'}</div>
      </div>
      </div>
    </div>
  </div>
    )
}