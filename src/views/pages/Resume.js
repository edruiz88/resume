import React from 'react';
import * as Icon from '../../components/icons'

function Resume(){
  const skills =[{skill:'JS, ReactJS', perc:'95', col:['#9a56ff','#e36cd9 ']},
                {skill:'NodeJS', perc:'90', col:['#23bdb8','#43e794 ']},
                {skill:'HTML, CSS', perc:'85', col:['#03a9f4','#51bcec ']},
                {skill:'Python', perc:'75', col:['#f48665','#fda23f']},
                {skill:'PHP', perc:'55', col:['#f6e384','#ffd500']},
                /*{skill:'VueJS', perc:'40', col:['#29c0b1','#4ed6c8']}*/]

  const DBskills =[{skill:'MongoDB', perc:'95', col:['#9a56ff','#e36cd9']},
                  {skill:'MySQL', perc:'80', col:['#23bdb8','#43e794']},
                  /*{skill:'MariaDB', perc:'60', col:['#f48665','#fda23f']},*/]

const FWSkills =[{skill:'Express, Fastify', perc:'95', col:['#9a56ff','#e36cd9 ']},
                {skill:'Flask', perc:'80', col:['#23bdb8','#43e794']},
                {skill:'AdonisJS', perc:'75', col:['#f48665','#fda23f']},
                {skill:'Laravel', perc:'50', col:['#03a9f4','#51bcec']}]

const courses = ['Web Development','Mobile Development','Cloud Computing','E-Commerce','Digital Marketing',
                'Time Management','Problem-Solving','PhotoShop','AI','SCRUM Fundamentals']
  return (

      <div className='section-content d-flex top'>

        <div className="timeline">

        <div className="space-title"><Icon.School style={{marginBottom:'-5px'}}/>Education</div>

          <div className="timeline-item">
              <div className="left-part">
                <h5 className="item-period">2023 - Current</h5>
                <span className="item-company">UNEFA</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h5 className="item-title">Computer Systems Engineering</h5>
                <p>Bachelor's degree in Computer Systems Engineering in process.</p>
              </div>
          </div>
          <div className="timeline-item">
              <div className="left-part">
                <h5 className="item-period">2009 - 2013</h5>
                <span className="item-company">UPTAG</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h5 className="item-title">Higher Technician</h5>
                <p>Higher Technician / Advanced Technician degree obtained in a 12-quarter career.</p>
              </div>
          </div>

          <div className="timelin" style={{marginTop:'60px'}}>

          <div className="space-title"><Icon.Briefcase style={{marginBottom:'-5px'}}/>Experience</div>

          <div className="timeline-item">
                <div className="left-part">
                  <h5 className="item-period">2016 - Current</h5>
                  <span className="item-company">Bitmify</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h5 className="item-title">Full Stack Developer</h5>
                  <p>A blockchain based website to exchange cryptocurrencies in real time through P2P transactions.</p>
                  <div>• Code creation and optimization</div>
                  <div>• Creation of custom components</div>
                  <div>• Performing QA tests</div>
                  <div>• Security</div>
                </div>
            </div>
            <div className="timeline-item">
                <div className="left-part">
                  <h5 className="item-period">2013 - 2016</h5>
                  <span className="item-company">Own Project</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h5 className="item-title">Full Stack Developer</h5>
                  <p>Creation of a GPT-type app which offers a paid survey service.</p>
                </div>
            </div>
            {/* <div className="timeline-item">
                <div className="left-part">
                  <h5 className="item-period">2011 - 2013</h5>
                  <span className="item-company">Google</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h5 className="item-title">Graphic Design</h5>
                  <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                </div>
            </div> */}
            <ul className="knowledges" style={{marginTop:'60px'}}>
            <div className="space-title"><Icon.Bulb style={{marginBottom:'-5px'}}/>Courses and Knowledges</div>
            {courses.map((e,i)=><li key={i}>{e}</li>)}
            </ul>
          </div>

        </div>

        <div className="skills">
          <div className="skills-content">
          <div className="space-title"><Icon.Code style={{marginBottom:'-5px'}}/>Coding Skills</div>
            {skills.map((e,i)=>
              <div key={i} className="mb-4">
                <div className="percent">{e.perc}%</div>
                <div className="skill-name">{e.skill}</div>
                <div className="progress">
                  <div className="progress-bar" 
                    style={{width: e.perc+'%', background:`linear-gradient(135deg, ${e.col[0]} 0%, ${e.col[1]} 100%)`}}></div>
                </div>
              </div>
            )}
          </div>

          <div className="db-skills" style={{marginTop:'60px'}}>
            <div className="space-title"><Icon.DB style={{marginBottom:'-5px'}}/>Database Skills</div>
            {DBskills.map((e,i)=>
              <div key={i} className="mb-4">
                <div className="percent">{e.perc}%</div>
                <div className="skill-name">{e.skill}</div>
                <div className="progress">
                  <div className="progress-bar" 
                    style={{width: e.perc+'%', background:`linear-gradient(135deg, ${e.col[0]} 0%, ${e.col[1]} 100%)`}}></div>
                </div>
              </div>
            )}
          </div>

          <div className="db-skills" style={{marginTop:'60px'}}>
            <div className="space-title"><Icon.GitFork style={{marginBottom:'-5px'}}/>Framework Skills</div>
            {FWSkills.map((e,i)=>
              <div key={i} className="mb-4">
                <div className="percent">{e.perc}%</div>
                <div className="skill-name">{e.skill}</div>
                <div className="progress">
                  <div className="progress-bar" 
                    style={{width: e.perc+'%', background:`linear-gradient(135deg, ${e.col[0]} 0%, ${e.col[1]} 100%)`}}></div>
                </div>
              </div>
            )}
          </div>

          </div>
        </div>

  )
}
export default Resume;