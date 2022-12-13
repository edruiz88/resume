import React from 'react';
import { NavLink } from "react-router-dom";
import Scroll from './CustomScroll'

function SideNav(props){

return (
        <div className="sidebar">
          <Scroll>
            <div style={{height:'calc(100% - 72px)'}}>
          <div className="user-info">
            <div className="user-pic">
              <img src="img/eduardo.png" alt="Eduardo Ruiz"/>
            </div>

            <div className="user-title">
              <h2>Eduardo Ruiz</h2>
              <h4>Full Stack Developer</h4>
            </div>
          </div>
              {props.sidemenu}

              <ul className="side-socials">
                <li className={`social-icon`}><a href="https://www.linkedin.com/in/eduardo-ruiz-42048121b" target="_blank"><props.icon.LinkedIn/></a></li>
                <li className={`social-icon`}><NavLink to="#" target="_blank"><props.icon.Facebook/></NavLink></li>
                <li className={`social-icon`}><NavLink to="#" target="_blank"><props.icon.Twitter/></NavLink></li>
              </ul>

              <div className="side-buttons">
                <a className={'btn-cv'} href={'/docs/eduardoCV.pdf'} target="_blank">Download CV</a>
              </div>
            </div>
          </Scroll>
          <div className="copyrights">© 2020 All rights reserved.</div>
        </div>
    )
}
export default SideNav;