import React, { useRef, useState, useEffect, useCallback } from "react";
import * as Icon from '../icons';

export default function Form(props) {
  const isDragging = useRef(false);
  const dragHeadRef = useRef();
  const piece = useRef(),aim = useRef(),box = useRef(),radar = useRef(),canvas1 = useRef()
  const [position, setPosition] = useState(0);
  const [aimPos, setAimPos] = useState({x:200,y:50});
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(0);
  const [rdrRot, setRdrRot] = useState(0);
  const [isRdr2, setIsRdr2] = useState(false);
  const [succss, setSuccss] = useState(false);

  const title = ['Fill the bubble','Bots are not allowed','Only humans, please'];
  const font = ['Segoe UI','Nunito','Comic Sans', 'sans-serif', 'hotjar', 'Courier New', 'Time new Romans'];
  const size = ['1','1.2','1.4', '1.6'];

  const reult_txt = result==1?'Success, you are a human!':result==2?'Ups, please try again!':''

  const check = (pos, aim)=> {
    const val = pos >= (aim-2) && pos <= (aim+2);
    isSuccess(val);
  }
const data = [
  {p:[{x:0,y:0},{x:320,y:0},{x:160,y:160}],color:"#caff67"},
  {p:[{x:0,y:0},{x:160,y:160},{x:0,y:320}],color:"#67beef"},
  {p:[{x:320,y:0},{x:320,y:160},{x:240,y:240},{x:240,y:80}],color:"#ef3d61"},
  {p:[{x:240,y:80},{x:240,y:240},{x:160,y:160}],color:"#f9f51a"},
  {p:[{x:160,y:160},{x:240,y:240},{x:160,y:320},{x:80,y:240}],color:"#a594c0"},
  {p:[{x:80,y:240},{x:160,y:320},{x:0,y:320}],color:"#6a5acd"},
  {p:[{x:320,y:160},{x:320,y:320},{x:160,y:320}],color:"#f6ca29"},
];
const getBgColor =()=> {
  return "rgb("+[
    Math.round(Math.random()*0xFF),
    Math.round(Math.random()*0xFF),
    Math.round(Math.random()*0xFF)
  ].join()+")";
}
function drawTitle(ctx,txt,sze,fnt) {
  ctx.fillStyle = getBgColor();
  ctx.font = `${sze}em ${fnt}`;//sans-serif
  ctx.textAlign = 'left';
  ctx.fillText(txt, 10, 22);
}

const loadImg = useCallback(() => {
  const aimImg = aim.current;
  const tangram = canvas1.current;
  const puzzlePiece = piece.current;

  var ctx = tangram.getContext('2d');
  var ctx2 = puzzlePiece.getContext('2d');

  var txt = title[Math.floor(Math.random()*title.length)];
  var fnt = font[Math.floor(Math.random()*font.length)];
  var sze = size[Math.floor(Math.random()*size.length)];
  drawPuzzle(ctx,ctx2, parseFloat(aimImg.style.left)+23, parseFloat(aimImg.style.top)+31.5);

  tangram.width = 320;
  tangram.height = 320;
  tangram.style.backgroundColor = getBgColor();
  for(var i = 0;i < data.length;i++){
      draw(data[i], ctx);
      drawTitle(ctx,txt,sze,fnt);
  }
}, []);

const icons = (icon)=>{
  return <svg
          xmlns="http://www.w3.org/2000/svg"
          width={'24'}
          height={'24'}
          viewBox="0 0 24 24"
          fill="none"
          stroke={'#fff'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        {icon==1?<>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <polyline points="7 8 3 12 7 16" />
          <polyline points="17 8 21 12 17 16" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </>:
        <>
          <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
          <path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" />
          <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
          <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
        </>}
        </svg>
}

const draw =(data, ctx)=>{
    ctx.beginPath();
    ctx.moveTo(data.p[0].x, data.p[0].y);
    for(var i = 1;i < data.p.length;i++){
        ctx.lineTo(data.p[i].x, data.p[i].y);
    }
    ctx.lineTo(data.p[0].x, data.p[0].y)
    ctx.closePath();
    ctx.fillStyle = data.color;
    ctx.fill();
}

const drawPuzzle = useCallback((ctx, ctx2, cx, cy) => {
  var imgData = ctx.getImageData(cx, cy, piece.current.width, piece.current.height)
    cx!=0?ctx2.putImageData(imgData, 0, 0):'';

  var x = 2;
  var y = 15.5;
  var PI = Math.PI;
  var l = 40.5;
  var r = 8.5;

  ctx2.beginPath();
  cx!=0?ctx2.globalCompositeOperation='destination-in':'';
  ctx2.moveTo(x, y);
  ctx2.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
  ctx2.lineTo(x + l, y);
  ctx2.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
  ctx2.lineTo(x + l, y + l);
  ctx2.lineTo(x, y + l);
  ctx2.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
  ctx2.lineTo(x, y);
  cx==0?ctx2.lineWidth = 0.6:'';
  cx==0?ctx2.fillStyle = 'rgba(255, 255, 255, 0.4)':'';
  cx==0?ctx2.shadowColor = '#4b4b4b':'';
  cx==0?ctx2.shadowBlur = 0.5:'';
  cx==0?ctx2.strokeStyle = 'rgba(48, 48, 48, 0.2)':'';
  cx==0?ctx2.stroke():'';
  ctx2.fill();

}, []);

  const isSuccess=(res)=>{
    setResult(res?1:2)
    res?setSuccss(true):''
    res?props.isOk(true):''
    setTimeout(()=>{
      if(res){setShow(false)}
      else{setResult(0);setPosition(0);syncCaptcha()}
    },1500)
  }
  const syncCaptcha=()=>{
    var aimY = [10, 50, 90, 120];
    var aimX = [60, 120, 180, 228];
    var y = aimY[Math.floor(Math.random()*aimY.length)];
    var x = aimX[Math.floor(Math.random()*aimX.length)];
    setAimPos({x:x,y:y});
  }

  const onMouseDown = useCallback(e => {
    if ((dragHeadRef.current && dragHeadRef.current.contains(e.target))||
        (piece.current && piece.current.contains(e.target))) {
      isDragging.current = true;
    }
    if (box.current && !box.current.contains(e.target)) {
      setShow(false)
    }
  }, []);

  const onMouseUp = useCallback((e) => {
    if (isDragging.current) {
      check(parseFloat(piece.current.style.left),parseFloat(aim.current.style.left))
      isDragging.current = false;
    }
  }, []);

  const onMouseMove = useCallback(e => {
    e.preventDefault();
    if (isDragging.current) {
      const {top, left} = dragHeadRef.current.getBoundingClientRect()
      let movX = !e.touches? e.movementX:e.touches[0].pageX - (left+22)
      setPosition(position => position + movX);
    }
    if(!e.touches&&!show){
      var eye = radar.current;
      const {top, left} = eye.getBoundingClientRect()
      var x = (left) + (eye.offsetWidth / 2);
      var y = (top) + (eye.offsetHeight / 2);
      var rad = Math.atan2(e.pageX - x, e.pageY - y);
      var rot = (rad * (180 / Math.PI) * -1) + 180;
      setRdrRot(rot)
    }
  }, []);
  //load image onShow
  useEffect(() => {
    show?loadImg():'';
  },[show, aimPos])

  useEffect(() => {
    if(show){
    const aimImg = aim.current;
    const tangram = canvas1.current;
    var ctx = tangram.getContext('2d');
    var ctx3 = aimImg.getContext('2d');
    loadImg(drawPuzzle(ctx,ctx3, 0, 0));
  }
  },[show])

  useEffect(() => {
    //touch
    document.addEventListener("touchend", onMouseUp, { passive: false });
    document.addEventListener("touchstart", onMouseDown, { passive: false });
    document.addEventListener("touchmove", onMouseMove, { passive: false });
    //mouse
    document.addEventListener("mouseup", onMouseUp, { passive: false });
    document.addEventListener("mousedown", onMouseDown, { passive: false });
    document.addEventListener("mousemove", onMouseMove, { passive: false });
    return () => {
      //touch
      document.removeEventListener("touchend", onMouseUp);
      document.removeEventListener("touchstart", onMouseDown);
      document.removeEventListener("touchmove", onMouseMove);
      //mouse
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, show]);

  return (
    <>
    <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
      {show&&(<div className="captcha_box" ref={box}>
      <div className="captcha_wrap">
        <div className="captcha_widget">
          <div className="captcha_window">

            <canvas className="canvas1" ref={canvas1}/>
            <canvas className="piece" height={'61'} width={'63'} ref={piece} style={{left: `${Math.min(Math.max(position, 0), 228)}px`, top:`${aimPos.y}px`, transition:isDragging.current?'none':'all 0.5s'}}></canvas>
            <canvas className="captcha_slider_aim" height={'61'} width={'63'} ref={aim} style={{left:`${aimPos.x}px`, top:`${aimPos.y}px`}}></canvas>

            <div className={`captcha_result d-flex${result==1?' shw good_bg':result==2?' shw bad_bg':''}`}>{reult_txt}</div>
          </div>
        </div>
        <div className="captcha_slider">
          <div className="captcha_slider_track">
            <div className="captcha_slider_tip" style={{opacity:isDragging.current?'0':'1'}}>Slide the bubble to verify</div>
          </div>
          <div className="captcha_slider_button" ref={dragHeadRef} style={{transform: `translate(${Math.min(Math.max(position, 0), 228)}px, 0px)`, transition:isDragging.current?'none':'all 0.5s'}}>{isDragging.current?icons(1):icons(2)}</div>
        </div>
        <div className="captcha_footer">
          <small className="captcha_brand text-muted">Powered by <b>BitNow</b></small>
          <div className="captcha_icons">
            <span className={''} onClick={()=>setShow(false)}><Icon.CircleX/></span>
            <span className={''} onClick={()=>syncCaptcha()}><Icon.Refresh/></span>
            <i className={'far fa-life-ring ml-2'}/>
          </div>
        </div>
      </div>
    </div>)}

    <div className={`captcha_holder${props.anim?' shake':''}`} onMouseOver={()=>setIsRdr2(true)} onMouseOut={()=>setIsRdr2(false)} >
      <div className={`captcha_rdr_btn${succss?' success':''}` } style={{pointerEvents:succss?'none':''}} onClick={()=>setShow(true)}>
        <div className="captch_rdr_wait">
          <div className="canvas" style={{backgroundColor:succss?'#2fcfa4':''}}>
            <div className={succss?'rdr_success':isRdr2?'radar2':'radar'} ref={radar} 
              style={{transform: !isRdr2&&!show&&!succss&&`rotate(${rdrRot}deg)`}} 
              dangerouslySetInnerHTML={{__html:succss?'&#x2714':''}}>
            </div>   
          </div>
        </div>
        <div className="captcha_rdr_inf">{succss?reult_txt:'I\'m not a robot'}</div>
      </div>
    </div>

    </div>
</>
  );
}