import React, { useEffect, useRef, useState } from 'react';

const Canvas = (props) => {
const [points, setPoints] = useState([])
const [pos, setPos]= useState({x:0,y:0})
const [tip, setTip]= useState(false)

const canv = useRef()

const axis=(ctx)=>{
  ctx.lineTo(10, 0)
  ctx.lineTo(10, canv.current.height-10)
  ctx.lineTo(canv.current.width, canv.current.height-10)
  ctx.strokeStyle='gray'
  ctx.stroke();
}

const drawLine=(ctx, data, col)=>{
  for (let i = 0; i < data.length; i++) {
    var ee = ((i==0?1:i) - 1)
    data[i].x = (canv.current.width-35)/(data.length-1)*i
    ctx.bezierCurveTo(
      data[ee].x + (data[i].x - data[ee].x) / 2,
      data[ee].y,
      data[ee].x + (data[i].x - data[ee].x) / 2,
      data[i].y,
      data[i].x,
      data[i].y);

      props.dots&&ctx.arc(data[i].x, data[i].y, 3.5, 0, 2 * Math.PI);
      setPoints(point => [...point, {x:data[i].x, y:data[i].y}]);
    }

    ctx.lineCap = "round";
    ctx.strokeStyle=col
    ctx.stroke();
}
//     ctx.shadowBlur = 20;
//     ctx.fillText('hola', data[i - 1].x, 22);
// }
    useEffect(()=>{
        var ctx  = canv.current.getContext("2d")
        var data = props.data.data1, data2 = props.data.data2
        var toogle1 = props.datas.one, toogle2 = props.datas.two
        canv.current.height = Math.max(...data.map(o => o.y), ...data2?data2.map(o => o.y):0)+35;

        //axis
        props.axis?axis(ctx):''

        ctx.shadowBlur = 8
        ctx.shadowOffsetX=8
        ctx.shadowOffsetY=8
        ctx.shadowColor = "gray"
        ctx.beginPath()
        ctx.translate(15, canv.current.height-20)
        ctx.scale(1, -1)
        ctx.lineWidth=5
        data&&toogle1?drawLine(ctx, data, props.color):''
        ctx.moveTo(data[0].x, data[0].y)
        ctx.beginPath()
        data2&&toogle2?drawLine(ctx, data2, props.color2):''

    },[props.data, props.dots, props.datas])

    const hoverPoint=(e)=>{
      let bound = canv.current.getBoundingClientRect();
      let x = (e.pageX-14) - bound.left;
      let y = bound.bottom - (e.pageY+20);

      const data = points.filter((d,i)=> (d.x>=x-4 && d.x<=x+4)&&(d.y>=y-4 && d.y<=y+4))

      if(data.length>0){
        setTip(true)
        setTimeout(()=>setPos(data[0]),10)
      }else{
        setTip(false)
      }
    }

    // useEffect(() => {
    //   var ctx  = canv.current;
    //   ctx.addEventListener("mousemove", hoverPoint);
    //   return () => {ctx.removeEventListener("mousemove", hoverPoint)};
    // },[hoverPoint]);

    return (
      <>
        <canvas ref={canv} onMouseMove={e=>hoverPoint(e)} width={350}/>
        <div className={'canvas-tip'} style={{display:tip?'block':'none', bottom:pos.y+30, left:pos.x-12}}>{pos.y}</div>
      </>
    );
}
export default Canvas;