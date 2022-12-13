import React, {useEffect, useState} from 'react';
import LineCanvas from '../../../components/charts/LineCanvas';
import Description from './Description';

function LineChart(){
const [data, setData] = useState(null)
const [datas, setDatas] = useState({one:true,two:true})
const [dots, setDots] = useState(true)

var data1 = [{y:50},{y:61},{y:80},{y:50},{y:72},{y:52},{y:60},{y:41},{y:30},{y:45},{y:70},{y:40}]
var data2 = [{y:70},{y:62},{y:44},{y:40},{y:21},{y:63},{y:82},{y:52},{y:50},{y:31},{y:70},{y:50}/*,{x:130,y:101}*/]
var data3 = [{y:63},{y:82},{y:52},{y:50},{y:31},{y:70},{y:50},{y:70},{y:62},{y:44},{y:40},{y:21}/*,{x:130,y:101}*/]
var data4 = [{y:0}, {y:30}, {y:10}, {y:120}, {y:50}, {y:63}, {y:10}]
var data5 = [{y:0}, {y:50}, {y:40}, {y:80}, {y:40}, {y:79}, {y:120}]

useEffect(()=>{
    const label = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    data4.forEach((e, i)=>{e.label = label[i]})
    data5.forEach((e, i)=>{e.label = label[i]})
    setData({data1:data4, data2:data5})
},[])

const dataInput=(e, i, t)=>{
    var val = e.target.value.replace(/^0+/,0);
    val.length==0?val=0:val=val

    let newArr = [...t==1?data.data1:data.data2];
    newArr[i].y = parseFloat(val); 
    setData({data1:t==1?newArr:data.data1, data2:t==2?newArr:data.data2}); 
}
const toggleData=(e)=>{
    setDatas(arr => ({ ...arr, [e]: !datas[e]}))
}

  return (
    <div className="work-content d-flex">
        {data&&<div className="show-work col">
        <div className={'chart-container'} style={{position:'relative'}}>
            <div className={'chart-header d-flex space'}>
                <div className={'toggle-wrapper'}>
                    <div className={'data-toggle good_bg'} onClick={()=>toggleData('one')}/>
                    <div className={'data-toggle bad_bg'} onClick={()=>toggleData('two')}/>
                </div>
                <div className={'chart-dots'} onClick={()=>setDots(e=>!e)} style={{background:dots?'#2fcfa4':'lightgray'}}/>
            </div>
            <LineCanvas color={'#2fcfa4'} color2={'#f46a6a'} data={data} datas={datas} dots={dots}/>
        </div>
        <div className={'data-container'} /*style={{visibility:datas.one?'visible':'hidden'}}*/>
            <div className={'data-title good'}>Data Buy</div>
            <div className="data-inputs d-flex center">
                {data.data1.map((data, index) => 
                    <div key={index} className={'mr-2'}>
                        <label>{data.label}</label>
                        <input type={'number'} onChange={e=>dataInput(e, index, 1)} value={data.y.toString()} className={'form-control sm'}/>
                    </div>
                )}
            </div>
        </div>

        <div className={'data-container'} /*style={{visibility:datas.two?'visible':'hidden'}}*/>
            <div className={'data-title bad'}>Data Sell</div>
            <div className="data-inputs d-flex center">
                {data.data2.map((data, index) => 
                    <div key={index} className={'mr-2'}>
                        <label>{data.label}</label>
                        <input type={'number'} onChange={e=>dataInput(e, index, 2)} value={data.y.toString()} className={'form-control sm'}/>
                    </div>
                )}
            </div>
        </div>

        </div>}
        <Description tags={['JS','React Hooks','Canvas']} desc={'A useful, beautiful and responsive Line Chart created with React Hooks using less than 90 lines of code.'}/>
    </div>
  )
}
export default LineChart;