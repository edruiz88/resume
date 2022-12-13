import React, {useEffect, useRef, useState} from 'react'

export default function Clock(props) {
  const [rotClock, setRotClock] = useState(0);
  const [isTouchMove, setIsTouchMove] = useState(false);
  const clockFace = useRef()
  const clockHand = useRef()
  const circleHand = useRef()
  const wrapper = useRef()
  const isMobile = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)

const getRadians = (el) => el * (Math.PI / 180);
// const hasClass = (el, selector) => el.classList.contains(selector);
// const getBrowser=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const arrayH = [12,1,2,3,4,5,6,7,8,9,10,11]
const arrayM = ['00',5,10,15,20,25,30,35,40,45,50,55]

const getMathDegIncrement = (degrees, num)=> {
  return Math.round(degrees / num) * num;
};
const getIncrementTimes = (degrees, type, count) => {
  return getMathDegIncrement(degrees, (type) * count);
}
const getClickTouchPosition = (event)=> {
  const { clientX, clientY, touches } = event;
  const { left, top } = wrapper.current.getBoundingClientRect();
  let obj = { x: null, y: null };

  if (!isMobile) {
    obj = {
      x: clientX - left,
      y: clientY - top,
    };
  } else if (isMobile && touches !== undefined) {
    if (Object.keys(touches).length > 0) {
      const { clientX: clx, clientY: cly } = touches[0];

      obj = {
        x: clx - left,
        y: cly - top,
      };
    }
  }
  //@ts-ignore
  if (Object.keys(obj).length === 0 && obj.constructor === Object) return;

  return obj;
};

useEffect(()=>{
    const clockWidth = (clockFace.current.offsetWidth - 32) / 2;
    const clockHeight = (clockFace.current.offsetHeight - 32) / 2;
    const radius = clockWidth - 9;

    arrayH.forEach((num, index) => {
      const angle = getRadians(index * (360 / arrayH.length));
      const span = document.createElement('span');
      const spanTips = document.createElement('span');

      spanTips.innerHTML = num;
      spanTips.classList.add('time-value');
      span.classList.add('timepicker-clock-time');

      span.style.left = `${clockWidth + Math.sin(angle) * radius - span.offsetWidth}px`;
      span.style.bottom = `${clockHeight + Math.cos(angle) * radius - span.offsetHeight}px`;

      span.appendChild(spanTips);
      wrapper.current.appendChild(span);
    });

  },[])

  const rotateHours = (val) => {
    const degrees = val > 12 ? val * 30 - 360 : val * 30;
    if (degrees > 360) return;
    setRotClock(degrees);
  };

  const rotateMinutes = (val) => {
    const degrees = val * 6;
    if (degrees > 360) return;
    setRotClock(degrees);
  };

  const setActTip=(va)=>{
    const tip = document.querySelectorAll('.time-value')
    const val = Number(props.isHour?(va==12?0:va):(va=='00'?0:(va/5)))
    tip.forEach((el) => el.classList.remove('active'));
    if (tip[val]===undefined){ circleHand.current.classList.add('small'); return;}
    tip[val].classList.add('active')
    circleHand.current.classList.remove('small')
  }
  useEffect(()=>{
    const tip = document.querySelectorAll('.time-value')
    clockHand.current.style.transition = 'all 0.3s ease'
    const array = props.isHour?arrayH:arrayM
    tip.forEach((el, i) => el.innerHTML = array[i]);
    props.isHour?rotateHours(props.hour):rotateMinutes(props.min)
    setTimeout(()=>clockHand.current.style.transition = 'none',300)
    setActTip(props.isHour?props.hour:props.min)
  },[props.isHour])

  const rotateClock=(rtangens)=>{
    // let increment = props.isHour?1:5
    let count = props.isHour?30:6
    let num = props.isHour?12:60
    let val;

    let deg = getIncrementTimes(Math.trunc((rtangens * 180) / Math.PI) + 90, 1/*increment*/, count);
    setRotClock(deg);

    if (deg < 0) {
      val = Math.round(360 + deg / count) % num;
      deg = 360 + props.isHour? deg : Math.round(deg / 6) * 6;
    } else {
      val = Math.round(deg / count) % num;
      (props.isHour && (val === 0 || val > 12))&&(val = 12)
      !props.isHour&&(deg = Math.round(deg / 6) * 6);
    }
    let hour_min = val >= 10 ? `${val}` : `0${val}`
    props.isHour?props.sethour(hour_min):props.setmin(hour_min)
    setActTip(val)
  }

  const handleEventToMoveHand = (event) => {
    event.preventDefault();
    const { type, target } = event;
    const obj = getClickTouchPosition(event, clockFace);

    const clockFaceRadius = clockFace.current.offsetWidth / 2;
    let rtangens = Math.atan2(obj.y - clockFaceRadius, obj.x - clockFaceRadius);

    if (!isTouchMove && (type === 'mousedown' || type === 'touchstart')){
      setIsTouchMove(true);
      rotateClock(rtangens);
    }
    if (type === 'mouseup' || type === 'touchend') {
      setIsTouchMove(false);
     return;
    }
    if (!isTouchMove) return;
    rotateClock(rtangens);
  }

  useEffect(() => {
    const circle = clockFace.current
    //touch
    circle.addEventListener("touchstart", handleEventToMoveHand, { passive: false });
    circle.addEventListener("touchmove", handleEventToMoveHand, { passive: false });
    circle.addEventListener("touchend", handleEventToMoveHand, { passive: false });
    //mouse
    circle.addEventListener("mousedown", handleEventToMoveHand, { passive: false });
    circle.addEventListener("mousemove", handleEventToMoveHand, { passive: false });
    circle.addEventListener("mouseup", handleEventToMoveHand, { passive: false });
    return () => {
      //touch
      circle.removeEventListener("touchstart", handleEventToMoveHand);
      circle.removeEventListener("touchmove", handleEventToMoveHand);
      circle.removeEventListener("touchend", handleEventToMoveHand);
      //mouse
      circle.removeEventListener("mousedown", handleEventToMoveHand);
      circle.removeEventListener("mousemove", handleEventToMoveHand);
      circle.removeEventListener("mouseup", handleEventToMoveHand);
    };
  }, [handleEventToMoveHand]);

    return(
        <div className="clock-body norm">
          <div ref={clockFace} className="clock-face norm">
            <div className="clock-dot norm"></div>
            <div ref={clockHand} className="clock-hand norm" style={{transform:`rotateZ(${rotClock}deg)`}}>
              <div ref={circleHand} className="circle-hand norm"></div>
            </div>
            <div ref={wrapper} className="clock-time-wrapper norm">

            </div>
          </div>
        </div>
    )
}