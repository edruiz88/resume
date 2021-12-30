import React, {useState} from 'react';
import UseCaptcha from '../../../components/captcha/useCaptcha';
import Description from './Description';

function Captcha(){
const [isOk, seIsOk] = useState(false)
const [anim, setAnim] = useState(false)
const [success, setSuccess] = useState(false)

const testSubmit=()=>{
    if(!isOk){
        setAnim(true);
        setTimeout(()=>setAnim(false),300)
    }
    else{
        setSuccess(true)
    }
}
const reset=()=>{
    setSuccess(false)
    seIsOk(false)
}

  return (
    <div className="work-content d-flex">
        <div className="show-work">

            <div className="card">
              <div className="card-body">
                {!success?<form method="POST" action="#">
                  <div className="form-group">
                    <div className="cntnt-plchldr txt"/>
                    <div className="cntnt-plchldr inp"/>
                  </div>
                  <div className="form-group">
                    <div className="d-flex space">
                      <div className="cntnt-plchldr txt"/>
                      <div className="cntnt-plchldr txt txt2"/>
                    </div>
                    <div className="cntnt-plchldr inp"/>
                  </div>
                  <div className="d-flex start" style={{margin:'-5px 5px 10px 0'}}>
                    <div className="cntnt-plchldr chk"/>
                    <div className="cntnt-plchldr txt txt2"/>
                  </div>
                  <UseCaptcha isOk={e=>seIsOk(e)} anim={anim}/>
                  <div className="d-flex space">
                    <div className={`btn btn-secondary`} onClick={()=>reset()} style={{visibility:isOk?'visible':'hidden'}}>Reset</div>
                    <div className={`btn btn-primary${!isOk?' disabled':''}`} onClick={()=>testSubmit()}>Submit</div>
                  </div>
                </form>:

                <div className='expandd' style={{textAlign:'center',marginTop:'30px',position:'relative',width:'100%',height:'100%',top:'0px',left:'0px'}}>
                    <div className="check-circle">
                        <div className="circle d-flex" /*dangerouslySetInnerHTML={{__html:'&#x2714'}}*/>🎊</div>
                    </div>
                    <h1>Congratulations!</h1>
                    <p>You are all set. Well done!</p>
                    <div className="btn btn-success" onClick={()=>reset()}>Try Again</div>
                </div>}

              </div>
            </div>

        </div>
        <Description tags={['JS','React Hooks','CSS','Canvas']} desc={'A fun and responsive Captcha puzzle created with React Hooks in less than 250 lines of code, whose goal is to improve the UX and increase security.'}/>
    </div>
  )
}
export default Captcha;