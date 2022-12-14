import React from 'react';
import { useHistory } from "react-router-dom";

function About(){
  const history = useHistory()

  const services = [{icon:'', title:'Development', desc:'Creation of code and custom components adapted to the needs of the app.'},
                    {icon:'', title:'Optimization', desc:'Reduce loading time and limit the use of external libraries.'},
                    {icon:'', title:'SEO', desc:'Search Engine Optimization and web development combined to create a SEO-friendly website.'},
                    {icon:'', title:'ReDesign', desc: `Redesign of the app to adapt it to the client's needs. `}]
  const hire=()=>{
    history.push("/contact");
  }
  return (

      <div className='section-content'>

        <div className="about d-flex">
          <div className="about-pic">
              <img src="img/eduardo.png" alt=""/>												
          </div>
          <div className="about-me">
              <h2 className="about-head">Hello,</h2>
              <div className="about-text">
                <p>I'm Eduardo Ruiz, a Full Stack Developer from Venezuela. I have experience creating and customizing websites, optimizing its code to reduce loading time in order to improve the UX.</p>
              </div>
              <div className="about-info d-flex">
                <div className="about-date">
                    <p className="mb-2">Name: <span>Eduardo Ruiz</span></p>
                    <p className="mb-0">Birthday: <span>07 Oct, 1988</span></p>
                </div>
                <div className="about-loc">
                    <p className="mb-2">Location: <span>Falcon, Venezuela</span></p>
                    <p className="mb-0">Email: <span>edruiz.dev@gmail.com</span></p>
                </div>
              </div>
              <div className="about-btns">
                <button className="btn btn-about download" onClick={()=>window.open('https://eruiz.netlify.app/docs/eduardoCV.pdf', '_blank')}>Download CV</button>
                <button className="btn btn-about hire" onClick={()=>hire()}>Hire Me</button>
              </div>
          </div>
        </div>

        <div className='services'>
        <h4 className="section-title serv">Services</h4>
          <div className='services-wrapper'>

            {services.map((e,i)=>
            <div key={i} className="service-item">
                {e.icon}
              <h6 className="service-title">{e.title}</h6>
              <p className="service-desc">{e.desc}</p>
            </div>
            )}

          </div>
        </div>

      </div>

  )
}
export default About;