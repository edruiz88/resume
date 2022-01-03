import React, {useState} from 'react';
import axios from 'axios';
import * as Icon from '../../components/icons'

function Contact(){
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [subject, setSubject] = useState('')
   const [msg, setMsg] = useState('')
   const [success, setSuccess] = useState(false)

   const sendEmail= async ()=>{
      const formData = {name:name,email:email,subject:subject,msg:msg}
      await axios({
         method:'POST',
         url:'https://eruiz.herokuapp.com/sendmail',
         data:formData,
         headers: {'Content-Type': 'application/json'}
     })
     .then((res)=>{
            res.data.type == 'Success'? setSuccess(true)
            :console.log(res.data);
        }).catch((err)=>{console.log(err)});
   }
   
  return (
      <div className="section-content d-flex top">

         <div className="contact-info-wrapper">
           
               <div className="contact-info-container mb-4">
                  <div className="contact-info">
                     <Icon.Phone/>
                     <div className="details">
                        <h5>Phone</h5>
                        <span>+58 424 668-6370</span>
                     </div>
                  </div>
               </div>
      
               <div className="contact-info-container mb-4">
                  <div className="contact-info">
                    <Icon.Mail/>
                     <div className="details">
                        <h5>Email address</h5>
                        <span>edruiz.dev@gmail.com</span>
                     </div>
                  </div>
               </div>
    
               <div className="contact-info-container">
                  <div className="contact-info">
                      <Icon.Maps2/>
                     <div className="details">
                        <h5>Location</h5>
                        <span>Falcon, Venezuela</span>
                     </div>
                  </div>
               </div>

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
              <button type="submit"  onClick={()=>sendEmail()} className="btn btn-about hire">Submit Message</button>  
          </div>
          :
          <div className='expandd' style={{textAlign:'center',marginTop:'30px',position:'relative',width:'100%',height:'100%',top:'0px',left:'0px'}}>
            <div className="check-circle">
               <div className="circle d-flex" /*dangerouslySetInnerHTML={{__html:'&#x2714'}}*/>🎊</div>
            </div>
            <h1>Congratulations!</h1>
            <p>You are all set. Well done!</p>
            <div className="btn btn-success" onClick={()=>reset()}>Try Again</div>
         </div>}
        </div>
          
  )
}
export default Contact;