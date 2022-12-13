import React, {useState} from 'react';
import { FullPage, Slide } from '../../../components/fullscroll';

export default function FullPageScroll() {
  const [isMob, setIsMob] = useState(false)
//   const [open, setOpen] = useState(false)
//   const [top, setTop] = useState(0)
//   const history = useHistory()
//   const cookies = useRef()
//   const navBtns = useRef()
//   const navLinks = useRef()
//   const innerH = window.innerHeight
 
//   const mobTop = top<=innerH?0:(innerH)-(top)
//   const showNoti = (top==0&&top<=20)?1:(top>=innerH-10&&top<=innerH+10)?2:0

//   const navBtnClick= type =>{
//     history.push(`/auth/${type=='join'?'signup':'login'}`);
//   }

  const slides = [
    {color: '#e7ebee', num: 1, content: <h2>1</h2>},
    {color: '#94f0b4', num: 2, content: <h2>2</h2>},
    {color: '#00c4ff', num: 3, content: <h2>3</h2>},
    {color: '#763cb0', num: 4, content: <h2>4</h2>},
    {color: '#5b47ff', num: 5, content: <h2>5</h2>}
  ];

  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    color:'white'
  }
//   const scroll=(e)=>{
//   e.preventDefault()
//   setTop(window.scrollY)
//   }

//   useEffect(()=>{
//     setTimeout(()=>cookies.current.style.bottom = '25px',400);
//   },[])

//   useEffect(()=>{
//   document.addEventListener('scroll', scroll);
//     return () => {
//       document.removeEventListener('scroll', scroll);
//     }
//   },[scroll])

//   const handleOpen= () =>{
//     setOpen(val => !val)
//     if(open){
//         navBtns.current.style.opacity = 0
//         navLinks.current.style.opacity = 0
//     }else{
//       setTimeout(()=>{
//         navBtns.current.style.opacity = 1
//         navLinks.current.style.opacity = 1
//       },250);
//     }
//   }
//   const acceptCookies=()=>{
//     cookies.current.style.bottom = '-100px';
//   }
//   const navButtons=()=>{
//     return(
//       <div ref={navBtns} className={`nav_btns${open?' mobile':''}`} style={{opacity:isMob?0:1}}>
//         <span className={'navlink mr-4'} onClick={()=>navBtnClick('login')}>Login</span>
//         <button  className="btn btn-round btn-lg btn-primary ml-2 mr-4" onClick={()=>navBtnClick('join')}>Join BitNow</button>
//       </div>);
//   }
//   const notiMockup=(pos, txt)=>{
//     return(<small className={`noti_mockup ${pos} text-muted`}>{txt}</small>)
//   }

    return (
     <div className="full_scroll">

      <FullPage controls={true} isMob={setIsMob}>
        {slides.map(({ color, num, content }) => (
          <Slide
            key={num}
            style={{...baseStyle,
              background: color,
              height:num==6?'75%':'100%'
            }}
          >
           {content}
          </Slide>
        ))}
      </FullPage>

    {/*<div ref={cookies} className="cookie-container" style={{transform:"translate(-50%, 0%)"}}>
        <span className="wrapper"> <span>This website uses cookies.</span> <a href={'#'}>Learn more</a> </span> 
        <button  className="btn btn-round btn-primary" onClick={()=>acceptCookies()}>Ok</button></div> */}
    </div>
    );
}