import React, {useState} from 'react';
import UseTimePicker from '../../../components/timepicker';
import Description from './Description';

function Captcha(){
    const [weekDay, setWeekDay] = useState('')
    const [picker, setPicker] = useState(false)
    const [hours, setHours] = useState([])
    const time = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const setTradeHour = val =>{
        setHours(arr => ({ ...arr, [weekDay]: val}))
        setTimeout(()=>{
            setPicker(false)
        },100)
    }
    const showPicker = day =>{
        setWeekDay(day)
        setPicker(true)
    }
    // const icons=(a)=>{
    //     const icon = hours[a]&&hours[a].from=='Closed'?'x':'ok'
    //     return <i className={`icon icon-${icon}`}></i>
    // }
  return (
    <div className="work-content d-flex">
        <div className="show-work">
        {picker&&(<UseTimePicker submit={(e)=>setTradeHour(e)} hide={()=>setPicker(false)} day={weekDay}/>)}
        <div className="hours-wrapper">
            {time.map((d,i)=>
            <div key={i} className="hour-calendar">
                <div className="week-day">{d}</div>
                {/* <div onClick={()=>showPicker('Sun')} className={`mobile-hours${hours['Sun']?' active':''}`}>{hours['Sun']?icons('Sun'):'--'}</div> */}
                <div onClick={()=>showPicker(d.slice(0, 3))} className="hours">{hours[d.slice(0, 3)]?hours[d.slice(0, 3)].from:'--:--'}</div>
                <div onClick={()=>showPicker(d.slice(0, 3))} className="hours">{hours[d.slice(0, 3)]?hours[d.slice(0, 3)].to:'--:--'}</div>
            </div>
            )}
        </div>

        </div>
        <Description tags={['JS','React Hooks','CSS']} desc={'This responsive TimePicker Range was created with React Hooks using less than 160 lines of code, ideal for selecting hours of work availability.'}/>
    </div>
  )
}
export default Captcha;