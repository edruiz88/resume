import React from 'react';
import { NavLink } from "react-router-dom";

function SideNav(props){

return (
        <div className="sidebar">

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
            <li className={`social-icon`}><NavLink to="#" target="_blank"><props.icon.LinkedIn/></NavLink></li>
            <li className={`social-icon`}><NavLink to="#" target="_blank"><props.icon.Facebook/></NavLink></li>
            <li className={`social-icon`}><NavLink to="#" target="_blank"><props.icon.Twitter/></NavLink></li>
          </ul>

          <div className="side-buttons">
            <button className="btn-cv">Download CV</button>
          </div>

          <div className="copyrights">© 2020 All rights reserved.</div>
        </div>
    )
}
export default SideNav;