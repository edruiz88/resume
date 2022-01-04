import React, {useState} from 'react';
import axios from 'axios';
import * as Icon from '../../components/icons'

function Contact(){
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [subject, setSubject] = useState('')
   const [msg, setMsg] = useState('')
   const [loading, setLoading] = useState(false)
   const [success, setSuccess] = useState(false)

   const info = [{icon:<Icon.Phone/>,name:'Phone',value:'+58 412 686-9502'},
               {icon:<Icon.Mail/>,name:'Email address',value:'edruiz.dev@gmail.com'},
               {icon:<Icon.Maps2/>,name:'Location',value:'Falcon, Venezuela'},
               {icon:<Icon.Paypal/>,name:'Support me ❤',value:'eduardoruizm88@gmail.com'}]

   const sendEmail= async ()=>{
      const formData = {name:name,email:email,subject:subject,msg:msg}
      setLoading(true)
      await axios({
         method:'POST',
         url:'https://eruiz.herokuapp.com/sendmail',
         data:formData,
         headers: {'Content-Type': 'application/json'}
     })
     .then((res)=>{
         setSuccess(true)
         setLoading(false)
      }).catch((err)=>{console.log(err)});
   }

  return (
      <div className="section-content d-flex top">

         <div className="contact-info-wrapper">
           
            {info.map((e,i)=>
            <div key={i} className="contact-info-container mb-4">
               <div className="contact-info">
                  {e.icon}
                  <div className="details">
                     <h5>{e.name}</h5>
                     <span>{e.value}</span>
                  </div>
               </div>
            </div>)}

          </div>
      
         {!success?<div className="contact-form-wrapper">

              <div className="inline-inputs">
                <div className="form-group">
                  <input type="text" name="your-name" onChange={e=>setName(e.target.value)}className="form-control" placeholder="Your name"/>
                </div>
                <div className="form-group">
                  <input type="email" name="your-email" onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Email address"/>
                </div>
              </div>

              <div className="form-group">
                <input type="text" name="your-name" className="form-control" onChange={e=>setSubject(e.target.value)} placeholder="Subject"/>
              </div>
              
              <div className="form-group">
                <textarea name="your-message" cols="40" rows="4" onChange={e=>setMsg(e.target.value)} className="form-control" placeholder="Message..." style={{marginTop:"0px", marginBottom:"0px",height:"113px"}}></textarea>
              </div>
              <button type="submit"  onClick={()=>sendEmail()} className={`btn btn-about hire${loading?' btn-progress':''}`}>Submit Message</button>  
          </div>
          :
            <div className='expandd' style={{textAlign:'center',position:'relative',width:'100%',height:'100%',top:'0px',left:'0px'}}>
               <div className="check-circle">
                  <div className="circle d-flex" /*dangerouslySetInnerHTML={{__html:'&#x2714'}}*/>✔</div>
               </div>
               <h1>Thank you!</h1>
               <div>I appreciate the you've taken the time to write me.</div>
               <div>I'll get back to you very soon.'</div>
               {/* <div className="btn btn-success" onClick={()=>reset()}>Try Again</div> */}
            </div>}
        </div>
          
  )
}
export default Contact;