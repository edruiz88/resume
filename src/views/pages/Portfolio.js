import React, {useState, useEffect, useRef} from 'react';
import * as Icon from '../../components/icons'
import useWindowSize from '../../components/useWindowSize'
import Captcha from './work/Captcha';
import TimePicker from './work/TimePicker';
import TextEditor from './work/TextEditor';
import LineChart from './work/LineChart';
import FeedBack from './work/FeedBack';
import ChatBot from './work/ChatBot';


const Portfolio = () =>{
    const [filter, setFilter] = useState(0)
    const [show, setShow] = useState(false)
    const size = useWindowSize();
    const fltr = useRef()
    const filters = ['All projects', 'Captcha Puzzle', 'Time Picker', 'Text Editor', 'Line Chart', 'Feedback', 'ChatBot']
    const icons = [<Icon.Briefcase/>, <Icon.Puzzle/>, <Icon.CalendarTime/>, <Icon.Writing/>, <Icon.ChartLine/>, <Icon.Message/>, <Icon.Robot/>]

    const items = [{title:'Captcha Puzzle', term:'creative, UX, Security', img:'captcha'},
        {title:'TimePicker Range', term:'creative, design', img:'timepicker'},
        {title:'Text Editor', term:'creative, UX, Security', img:'texteditor'},
        {title:'Line Chart', term:'creative, design', img:'linechart'},
        {title:'Feedback', term:'branding, art', img:'feedback'},
        {title:'ChatBot', term:'design, UX, creative', img:'captcha'}]

    const closeMenu=(e)=>{
        if (fltr.current && !fltr.current.contains(e.target)) {
            setShow(false)
        }
    }
    useEffect(() => {
        if(show){
          window.addEventListener("mousedown", closeMenu);
          return () => {
              window.removeEventListener("mousedown", closeMenu);
          };
        }
    }, [show]);

    const setpage= e =>{
        setFilter(e)
        setShow(false)
    }

    return (
    <>
    {size.width<620?<div className="dropdown-filter">
        <div onClick={()=>setShow(true)} className="filter-toggle d-flex start" style={{borderRadius:`10px 10px${show?' 0 0':' 10px 10px'}`}}>{icons[filter]} {filters[filter]}</div>
        <div ref={fltr} className={`dropdown-menu${show?' show':''}`} style={{display:show?'block':'none', borderRadius:'0 0 10px 10px'}}>
            {filters.map((d, i)=> 
                <div key={i} onClick={()=>setpage(i)} className={`dropdown-item d-flex start${filter==(i)?' active':''}`}>{icons[i]} {d}</div>
            )}
        </div>
    </div>:
    <ul className="portfolio-filter">
        {filters.map((d, i) => 
            <li key={i} onClick={()=>setpage(i)} className={`filter-item d-flex start${filter==i?' active':''}`}>{filter==(i)?icons[i]:''} {d}</li>
        )}
    </ul>}
        {filter==0?<div className="portfolio-wrapper">

        {items.map((d, i) => 
            <div key={i} className="grid-item" onClick={()=>console.log('item clicked')}>
                    <div className="portfolio-item">
                        <div className="details">
                            <h4 className="title">{d.title}</h4>
                            <span className="term">{d.term}</span>
                        </div>
                        {icons[i+1]}
                    <div className="thumb">
                        {/* <img src="https://bako-portfolio.vercel.app/images/portfolio/1.jpg" alt="Creative Art"/> */}
                        <img src={`img/portfolio-${d.img}.png`} alt="Creative Art"/>
                        <div className="mask"></div>
                    </div>
                </div>
            </div>
        )}

        </div>:

        <div className={'project-wrapper'}>
            {filter==1?<Captcha/>:
             filter==2?<TimePicker/>:
             filter==3?<TextEditor/>:
             filter==4?<LineChart/>:
             filter==5?<FeedBack/>:
             filter==6?<ChatBot/>:''}
        </div>}

    </>
    )
}
export default Portfolio;