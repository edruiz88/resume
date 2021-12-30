import React, {useEffect, useState, useRef} from 'react';
import * as Icon from '../../../components/icons'
import {newChatCall} from '../../../components/socket/emit'
import {botChat} from '../../../components/socket/events'
import Scroll from '../../../components/CustomScroll'

const About=()=>{
    const [chat, setChat] = useState([])
    const [msgs, setMsgs] = useState('*')
    const [init, setInit] = useState(0)
    const [show, setShow] = useState(false)
    // const [anim, setAnim] = useState(false)
    const [member, setMember] = useState([])
    const [placeBtns, setPlaceBtns] = useState(['I’m a BitNow customer with a question.','I’d like to learn more about BitNow','Just browsing!'])
    const msg = useRef()
    const empty = msgs=='*'

    const members = [{name:'Jhon Doe', img:'img/user-3.png'}, {name:'Jane Marie', img:'img/user-7.png'}, {name:'Olivia Newton', img:'img/user-1.png'}]

    useEffect(()=>{
      botChat({setChat})
    },[])

    const send =(e)=>{
      const ms = e?e:msgs
      // if(msgs!=''&&msgs!='*'){
        setChat(setChat => [...setChat, {pos:'right', txt:ms}]);
        setTimeout(()=>newChatCall(ms),500)
        msg.current.value=''
        setMsgs('')
        placeBtns[0]?setPlaceBtns([]):''
      // }else{
      //   setAnim(true);
      //   setTimeout(()=>setAnim(false),300)
      // }
    }

    const startChat =(e)=>{
      e==0?setTimeout(()=>setInit(0),250):setInit(1)
      e==1?setTimeout(()=>setShow(e=>!e),10):setShow(e=>!e)
    }

    const initChat =(e)=>{
      setMember(e)
      setInit(2)
    }

    const btnPlace=btn=>{
      setMsgs(btn)
      setTimeout(()=>{send(btn);setPlaceBtns([])},310)
    }

    return(
        <div className='section-content d-flex top'>

         {init>0&&<div className={`chatbot${show?' show':''}`}>

         <div className={'chatbot-cntnt'}>
            <div className={'chatbot-header'} style={{minHeight:init==1?'50%':'12%'}}>

            {init==2&&<><div onClick={()=>setInit(1)} className={'chat-back d-flex'}><Icon.Left/></div>
              <div className={'chat-users d-flex start'} style={{zIndex: 2}}>
                <ul className="member-list header">
                  {member.map((d,i)=>
                    <li key={i} className="team-member"><img src={d.img} alt="user"/></li>
                  )}
                </ul>
                <div className={'users ml-2'}>
                  <h6>{member[0].name}</h6>
                  <span>🕐 {' Few minutes'}</span>
                </div>
              </div></>}

              <div className={'header-cntnr'}>
                <div className={`header-item${show&&init==1?' show':''}`} style={{opacity:init==2?0:1}}>
                  <h1>Hola</h1>
                  <h6>Hacemos que la comunicación entre negocios y personas sea sencilla y fluida.</h6>
                </div>
              </div>
            </div>
            
            <div className={'chat-cntnt'}>
            
              {init==1?<div className={'scroll-init'}>
              <Scroll>
                <div className={'chatbot-init'} style={{paddingTop:'160px'}}>
                  <div className={'cards-cntnt'}>
                  
                    <div className={'chatbot-cards'}>
                    <h6 className={'mb-2'}>Start a conversation</h6>
                      <ul className="member-list" /*style={{padding:'10px 0 10px 0', margin:0}}*/>
                        {members.map((d,i)=>
                          <li key={i} onClick={()=>initChat([d])} className="team-member"><img src={d.img} alt="user"/></li>
                        )}
                        {/* <li className="avatar"><span className="badge badge-primary">+4</span></li> */}
                      </ul>
                      <div onClick={()=>initChat(members)} className={'btn-primary round mt-2 d-flex'}>Chat with us <Icon.Send className={'ml-2'}/></div>
                    </div>
                    <div className={'chatbot-cards'}>
                      <h6 className={'mb-2'}>Find a response</h6>
                      <div className="input-group d-flex">
                        <input type="text" className="form-control" placeholder="Search in our articles"/>
                        <div className="input-append d-flex"><Icon.Right/></div>
                      </div>
                    </div>
                    <div className={'chatbot-cards'}></div>
                    <div className={'chatbot-cards'}></div>
                  </div>
                </div>
                </Scroll>
              </div>
              :<Scroll>
                <div className={'chatbot-init'} style={{padding:'10px'}}>
                {chat.map((d, i)=>
                <div key={i} className={`chatbot-msg ${d.pos}-msg`}>
                {/* <div className="msg-img" style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}></div> */}
                <div className="msg-bubble">
                  <div className="msg-text">
                    {d.txt}
                  </div>
                </div>
              </div> )}
              {placeBtns[0]&&<div className={'place-cntnr'} style={{top:`${80-((placeBtns.length+1)*8)}%`}}>
                  <div className={'chat-placeholder muted mb-2'} style={{opacity:empty?1:0}}>
                    👋  Hi there! Welcome to BitNow - the future of P2P transactions. Want to find out more about BitNow?
                  </div>
                  <div className={'btns-placeholder'}>
                    {placeBtns.map((d,i)=>
                      <div key={i} onClick={()=>btnPlace(d)} className={'btn-primary mb-2'} style={{top:msgs==d?'12.5%':`${80-(i*8)}%`, opacity:(empty||msgs==d)?1:0}}>{d}</div>
                    )}
                  </div>
                </div>}
              </div>
              </Scroll>}
          
            </div>
          
           {init==2&&<div className={'chatbot-input'}>
            <textarea ref={msg} onChange={e=>setMsgs(e.target.value)} /*className={`msg-area${anim?' shake':''}`}*/ placeholder="Escribe un mensaje"></textarea>
            <div className={'msg-act'}>
              <Icon.Send onClick={e=>send()}/>
            </div>
            </div>}
 
            </div>

         </div>}
         <svg className="arrow">
          <path className="a1" d="M0 0 L30 22 L60 0"></path>
          <path className="a2" d="M0 20 L30 42 L60 20"></path>
          <path className="a3" d="M0 40 L30 62 L60 40"></path>
        </svg>
         <div onClick={()=>startChat(show?0:1)} className={'float-btn btn-primary'}><Icon.Robot/></div>
        </div>
    )
}
export default About