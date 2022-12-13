import React, {useState} from 'react';
import axios from 'axios';
import * as Icon from '../../components/icons'
import validate from '../../components/ValidForm'

function Contact(){
   const [values, setValues] = useState({name:'',email:'',subject:'',message:''})
   const [errors, setErrors] = useState({})
   const [touched, setTouched] = useState({})
   const [loading, setLoading] = useState(false)
   const [success, setSuccess] = useState(false)

   const info = [{icon:<Icon.Phone/>,name:'Phone',value:'+58 412 686-9502'},
               {icon:<Icon.Mail/>,name:'Email address',value:'edruiz.dev@gmail.com'},
               {icon:<Icon.Maps2/>,name:'Location',value:'Falcon, Venezuela'},
               {icon:<Icon.Paypal/>,name:'Support me ❤',value:'eduardoruizm88@gmail.com'}]

const checkErrors = (name, value) => {
   const { [name]: removedError, ...rest } = errors;
   // check for a new error
   const error = validate[name](value, name);
   // validate the field if the value has been touched
   setErrors({
     ...rest,
     ...(error && { [name]: touched[name] && error }),
   });
}

const handleFocus= evt =>{
   const { name } = evt.target;
   setTouched({
      ...touched,
      [name]: true,
    });
}

// change event handler
const handleChange = evt => {
   const { name, value } = evt.target;
   // save field values
   setValues({
     ...values,
     [name]: value,
   });
   checkErrors(name, value)
 }
 
 const handleBlur = evt => {
   const { name, value } = evt.target;
   checkErrors(name, value)
 }

 // form submit handler
 const sendEmail = async () => {
   // validate the form
   const formValidation = Object.keys(values).reduce(
     (acc, key) => {
       const newError = validate[key](values[key], key);
       const newTouched = { [key]: true };
       return {
         errors: {
           ...acc.errors,
           ...(newError && { [key]: newError }),
         },
         touched: {
           ...acc.touched,
           ...newTouched,
         },
       };
     },
     {
       errors: { ...errors },
       touched: { ...touched },
     },
   )
   setErrors(formValidation.errors);
   setTouched(formValidation.touched);
 
   if (
     !Object.values(formValidation.errors).length && // errors object is empty
     Object.values(formValidation.touched).length ===
       Object.values(values).length && // all fields were touched
     Object.values(formValidation.touched).every(t => t === true) // every touched field is true
   ) {
      const formData = {name:values.name,email:values.email,subject:values.subject,msg:values.message}
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
      }).catch((err)=>{console.log(err)})
   }
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
                  <input type="text" name="name" className={`form-control${errors.name ? ' invalid' : ''}`} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} placeholder="Your name"/>
                  <span className="form-error">{touched.name && errors.name}</span>
                </div>
                <div className="form-group">
                  <input type="email" name="email" className={`form-control${errors.email ? ' invalid' : ''}`} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} autoComplete="email" placeholder="Email address"/>
                  <span className="form-error">{touched.email && errors.email}</span>
                </div>
              </div>

              <div className="form-group">
                <input type="text" name="subject" className={`form-control${errors.subject ? ' invalid' : ''}`} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} placeholder="Subject"/>
                <span className="form-error">{touched.subject && errors.subject}</span>
              </div>
              
              <div className="form-group">
                <textarea name="message" cols="40" rows="4" className={`form-control${errors.message ? ' invalid' : ''}`} onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} placeholder="Message..." style={{marginTop:"0px", marginBottom:"0px",height:"113px"}}></textarea>
                <span className="form-error">{touched.message && errors.message}</span>
              </div>
              <button onClick={()=>sendEmail()} className={`btn btn-about hire${loading?' btn-progress':''}`}>Submit Message</button>  
          </div>
          :
            <div className='expandd' style={{textAlign:'center',position:'relative',width:'100%',height:'100%',top:'0px',left:'0px'}}>
               <div className="check-circle">
                  <div className="circle d-flex" >✔</div>
               </div>
               <h1>Thank you!</h1>
               <div>I appreciate that you've taken the time to write me.</div>
               <div>I'll get back to you very soon.</div>
            </div>}
        </div>
          
  )
}
export default Contact;