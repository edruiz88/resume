import React, { useState, useRef, useCallback, useEffect } from 'react';
import useWindowSize from '../../../components/useWindowSize';
import SideNav from '../../../components/SideNav';
import * as Icon from '../../../components/icons';

import { Route, NavLink, useLocation } from 'react-router-dom';
import { toastProvider } from '../../../components/toast';
import { ModalProvider } from "../../../components/modal/modalContext";
import Scroll from '../../../components/CustomScroll'

function MainLayout({children, ...rest}){
  const [open, setOpen] = useState(false)
  const size = useWindowSize();
  const navLinks = useRef()
  var loc = useLocation().pathname;
  const title = loc.replace('/', '')[0].toUpperCase() + loc.slice(2)

  const sideArr = [{link:'/home', icon:<Icon.Home/>, name:'Home'},
                  {link:'/about', icon:<Icon.User/>, name: 'About me'},
                  {link:'/resume', icon:<Icon.School/>, name:'Resume'},
                  {link:'/portfolio', icon:<Icon.Briefcase/>, name:'Portfolio'},
                  {link:'/contact', icon:<Icon.Mail/>, name:'Contact'}]

  const handleOpen= () =>{
    setOpen(val => !val)
    if(open){
        // navBtns.current.style.opacity = 0
        navLinks.current.style.opacity = 0
    }else{
      setTimeout(()=>{
        // navBtns.current.style.opacity = 1
        navLinks.current.style.opacity = 1
      },250);
    }
  }

  const sideClick=()=>{
    setTimeout(()=>setOpen(false),300)
  }

  const sideMenu=()=>{
    return(
      <ul className="side-menu">
        {sideArr.map((e, i)=>
          <li key={i} onClick={()=>sideClick()} className={`list-menu${loc==e.link?' active':''}`}>
            <NavLink className="nav-link" to={e.link}>{e.icon}<span>{e.name}</span></NavLink>
          </li>
        )}
    </ul>
    )
  }
  return (
    <div className="page-wrapper">
    {size.width>767.98&&<SideNav sidemenu={sideMenu()} icon={Icon} /*hideSide={hideSide} *//>}
        <div className="site-content" /*style={{paddingLeft:mini, height:`100%`}} */>

        {size.width<767.98?<nav className={`nav-mobile${open?' active':''}`}
        style={{backgroundColor: open?'rgba(39,45,61,.9)':'transparent', height:open?'100vh':'70px'}}>
        {open&&<div ref={navLinks} className="navLinks">
          {sideMenu()}
        </div>}
        {/* <img className={'nav-img'} src={'img/eduardo.png'}/> */}
        <div id="nav-icon3" onClick={()=>handleOpen()} className={`nav-icon ${open?'open':''}`}><span></span><span></span><span></span><span></span></div>
        </nav>:''}
          <div className={`page-section${loc=='/home'?' home':''}`}>
            {loc!='/home'&&<h3 className="section-title">{title}</h3>}

            <Scroll>
              <div className={`scroll-zone`}>
                {children}
              </div>
            </Scroll>

          </div>
        </div>
    </div>
  )  
}  
const MainLayoutRoute = ({component: Component, ...rest}) => {

  return ( 
    <Route {...rest} render={matchProps => (
      <MainLayout>
        <ModalProvider>
          <Component {...matchProps}/>
        </ModalProvider>
      </MainLayout>
    )} />  
  )  
};  
export default toastProvider (MainLayoutRoute);  