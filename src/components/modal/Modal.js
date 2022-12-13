import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./modalContext";
// import DisputeTrade from './actions/DisputeTrade';
// import ReleaseCoin from "./actions/ReleaseCoin";
import InsertImage from "./actions/InsertImage";
// import CancelTrade from "./actions/CancelTrade";
// import TradeInvoice from "./actions/TradeInvoice";
// import ModalProfile from "./actions/ModalProfile";
import * as Icon from "../icons"

const modalStyle = {
  backgroundColor: '#fff',
  padding: '3px 0 14px 0',
  borderRadius: '10px',
  margin:'auto',
  maxWidth: '95%',
  textAlign: 'center',
  animationDuration:' 0.25s',
};

const wrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const maskStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100000
};

const containerStyle = {
  position: 'relative',
  width: '32em',
  zIndex: 100001
};

const Modal = () => {
  const [checked, setChecked] = useState(false);
  const [err, setErr] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [img, setIimg] = useState();
  const { cntnt, handleModal, modal } = useContext(ModalContext);
  const type = cntnt.type;
  const media = (type=='image'||type=='video');
  const valid = checked? 'is-valid':'is-invalid';
  const btn_txt = media?'Insert':type=='rel'?'Release BTC':type=='disp'?'Dispute':type=='paid'?'I have paid':type=='res'?'Resolve Dispute':'Invoice';
  const title = type=='image'?'Insert Image':type=='video'?'Insert Video':type=='disp'?'Dispute Trade?':type=='paid'?'Have you paid?':type=='res'?'Resolve Dispute?':'Invoice';
  const icon = type=='image'? <Icon.Image/>:<Icon.Video/>;
  const data = type=='image'?img:`<iframe type="text/html" width="300" height="200" src=${img&&img.replace("watch?v=", "embed/")} frameborder="0"></iframe>`
  const mediaFile = {uri:type=='image'?'insertImage':'insertHTML', data:data}

  const checkValid=()=>{
    if(!checked&&!media){
      setErr(true)
    }else{
      err?setErr(false):'';
      cntnt.handleAction(media?mediaFile:type);
      handleModal();
    }
  }
  const resetModal=()=>{
    checked?setChecked(false):'';
    err?setErr(false):'';
    handleModal();
  }
  const act =(e)=>{
    setIsActive(e);
  }

  if (modal) {
    return createPortal(
      <div style={wrapperStyle}>
      <div style={maskStyle} onClick={() => resetModal()} />
      <div style={containerStyle}>
        <div className={'expandd'} style={modalStyle}>
          <div className={'m-header'}>
          {cntnt.image?<img className={'m-image'} src="/../assets/img/send-BTC.png" alt="" style={{display:'flex',width:'80px',height:'80px',margin:'1.25em auto'}}/>:
           icon}
          <h4>{title}</h4>
          </div>
          <div className={`m-content${media?' inv':''}`}>
          {/* <p>{cntnt.content}</p> */}
          {media&&(<InsertImage type={type} setimg={(e)=>setIimg(e)}/>)}
          {/* {type=='rel'&&(<ReleaseCoin name={cntnt.name} real={cntnt.real} btc={cntnt.btc} c1={cntnt.c1} curr={cntnt.curr}/>)}
          {type=='can'&&(<CancelTrade name={cntnt.name} />)}
          {type=='disp'&&(<DisputeTrade timer={cntnt.timer} btc={cntnt.btc} setAction={(e)=>act(e)}/>)}
          {type=='inv'&&(<TradeInvoice name={cntnt.name} btc={cntnt.btc} c1={cntnt.c1} curr={cntnt.curr} rate={cntnt.rate} is={cntnt.is} id={cntnt.id}/>)}
          {type=='prf'&&(<ModalProfile name={cntnt.name} btc={cntnt.btc} c1={cntnt.c1} curr={cntnt.curr} rate={cntnt.rate} is={cntnt.is} id={cntnt.id}/>)} */}
          </div>
          <div className="custom-control custom-checkbox mt-2 mb-2" style={{display:media?'none':'block'}}>
            <input type="checkbox" className={`custom-control-input ${err?valid:''}`} id="termsAgreement" onChange={(e)=>setChecked(e.target.checked)} /*checked={checked}*//>
            <label className="custom-control-label" htmlFor="termsAgreement">I agree to the terms and conditions</label>
          </div>
          <div className={'m-actions'} style={{display:type=='inv'||type=='prf'?'none':'block'}}>
            <button className="btn btn-sm btn-secondary mr-2" onClick={() => resetModal()}>Back</button>
            <button className={`btn btn-sm ${!isActive&&type=='disp'&&'disabled'} btn-primary ml-2`} onClick={() => checkValid()}>{btn_txt}</button>
          </div>
        </div>
        </div>
    </div>,
      document.body
    );
  } else return null;
};
export default Modal;