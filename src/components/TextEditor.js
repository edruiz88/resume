import React, { useState, useRef, useContext } from 'react';
import {ModalContext} from './modal/modalContext';
import * as Icon from './icons';

const TextEditor = props =>{
    const [show, setShow] = useState(0);
    const [act, setAct] = useState([]);
    const [fontCol, setFontCol] = useState('#000000');
    const [backCol, setBackCol] = useState('#ffff00');
    const {handleModal} = useContext(ModalContext);

    const colors =[{a:['#000000','#424242','#636363','#9C9C94','#CEC6CE','#EFEFEF','#F7F7F7','#FFFFFF'],
                    b:['#FF0000','#FF9C00','#FFFF00','#00FF00','#00FFFF','#0000FF','#9C00FF','#FF00FF'],
                    c:['#9C0000','#B56308','#BD9400','#397B21','#104A5A','#085294','#311873','#731842']}]

    const note = useRef();

    const btnClick = (type, arg, col) =>{
        note.current.focus();
        var ar = arg? arg : ''
        if(col){
          document.execCommand(type.a,false,ar.a);
          document.execCommand(type.b,false,ar.b);
        }else{
          document.execCommand(type,false,ar);
        }
        setShow(0);
        type=='backColor'?setBackCol(ar):type=='foreColor'?setFontCol(ar):'';
        !col?setAct(arr => ({ ...arr, [type]: !act[type]})):'';
      }
      const noteChange= val =>{
        props.text(val);
        console.log(val)
      }
      const handleAction= val =>{
        note.current.focus();
        setTimeout(()=>document.execCommand(val.uri, false, val.data),100);
      }

      const buttonType = (type, i, title)=>{
          const icon = i==0?<Icon.Bold/>:i==1?<Icon.Italic/>:i==2?<Icon.Underline/>:i==3?<Icon.Eraser/>:i==4?<Icon.StrikeThrough/>:i==5?<Icon.AlignLeft/>
                      :i==6?<Icon.AlignCenter/>:i==7?<Icon.AlignRight/>:i==8?<Icon.AlignJustified/>:i==9?<Icon.OutDent/>:<Icon.InDent/>;

        return(<button onClick={()=>btnClick(type)} className={`note-btn btn${act[type]?' active':''}`} title={title}>{icon}</button>)
    }

    return(
        <div className="note-editor note-frame">
        <div className="note-toolbar-wrapper" style={{height:"auto"}}>
        <div className="note-toolbar card-header" style={{position:'relative',top:'0px',width:'100%'}}>
            <div className="note-btn-group btn-group note-style">
                {buttonType('bold', 0, 'Bold (CTRL+B)')}
                {buttonType('italic', 1, 'Italic (CTRL+I)')}
                {buttonType('underline', 2, 'Underline (CTRL+U)')}
                {buttonType('removeFormat', 3, 'Remove Font Style (CTRL+\)')}
            </div>
            <div className="note-btn-group btn-group note-font">
                {buttonType('strikeThrough', 4, 'Strikethrough (CTRL+SHIFT+S)')}
            </div>
            <div className="note-btn-group btn-group">
                <div className="note-btn-group btn-group">
                    <button onClick={()=>setShow(1)} className="note-btn btn dropdown-toggle" title="Paragraph"><Icon.AlignLeft/></button>
                    <div className={`dropdown-menu note-align`} style={{display:show==1?'block':'none'}}>
                        <div className="note-btn-group btn-group note-align">
                            {buttonType('justifyLeft', 5, 'Align left (CTRL+SHIFT+L)')}
                            {buttonType('justifyCenter', 6, 'Align center (CTRL+SHIFT+E)')}
                            {buttonType('justifyRight', 7, 'Align right (CTRL+SHIFT+R)')}
                            {buttonType('justifyFull', 8, 'Justify full (CTRL+SHIFT+J)')}
                        </div>
                        <div className="note-btn-group btn-group">
                            {buttonType('outdent', 9, 'Outdent (CTRL+[)')}
                            {buttonType('indent', 10, 'Indent (CTRL+])')}
                        </div>
                    </div>
                </div>
            </div>
        <div className="note-btn-group btn-group">
            <div className="note-btn-group btn-group">
                <button onClick={()=>btnClick({a:'backColor',b:'foreColor'}, {a:backCol,b:fontCol}, true)} className="note-btn btn" title="Recent Color"><Icon.Font style={{color:fontCol,backgroundColor:backCol}}/></button>
                <button onClick={()=>setShow(2)} className="note-btn btn dropdown-toggle" tabIndex="-1" data-toggle="dropdown" title="More Color"></button>
                <div className={`dropdown-menu note-align`} style={{display:show==2?'block':'none'}}>
                    <div className="note-palette">
                    <div className="note-palette-title">Background Color</div>
                    <div>
                    <button type="button" className="btn btn-light" data-event="backColor" data-value="inherit">Transparent</button></div>
                    <div className="note-holder" data-event="backColor">
                        <div className="note-color-palette">
                            <div className="note-color-row">
                                {colors[0].a.map((e,i)=>
                                    <button key={i} onClick={()=>btnClick('backColor', e)} className="note-color-btn" style={{backgroundColor:e}} title={e}></button>
                                )}
                            </div>
                            <div className="note-color-row">
                                {colors[0].b.map((e,i)=>
                                    <button key={i} onClick={()=>btnClick('backColor', e)} className="note-color-btn" style={{backgroundColor:e}} title={e}></button>
                                )}
                            </div>
                            <div className="note-color-row">
                            {colors[0].c.map((e,i)=>
                                    <button key={i} onClick={()=>btnClick('backColor', e)} className="note-color-btn" style={{backgroundColor:e}} title={e}></button>
                                )}                   
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="note-palette">
                    <div className="note-palette-title">Foreground Color</div>
                    <div><button type="button" className="btn btn-light" data-event="removeFormat" data-value="foreColor">Reset to default</button></div>
                    <div className="note-holder" data-event="foreColor">
                        <div className="note-color-palette">
                            <div className="note-color-row">
                                {colors[0].a.map((e,i)=>
                                    <button key={i} onClick={()=>btnClick('foreColor', e)} className="note-color-btn" style={{backgroundColor:e}} title={e}></button>
                                )} 
                            </div>
                            <div className="note-color-row">
                                {colors[0].b.map((e,i)=>
                                    <button key={i} onClick={()=>btnClick('foreColor', e)} className="note-color-btn" style={{backgroundColor:e}} title={e}></button>
                                )} 
                            </div>
                            <div className="note-color-row">
                                {colors[0].c.map((e,i)=>
                                    <button key={i} onClick={()=>btnClick('foreColor', e)} className="note-color-btn" style={{backgroundColor:e}} title={e}></button>
                                )}               
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="note-btn-group btn-group note-style">
            <button onClick={()=>handleModal({type:'image', handleAction})} className={`note-btn btn`} title="Picture"><Icon.Image/></button>
            <button onClick={()=>handleModal({type:'video', handleAction})} className={`note-btn btn`} title="Video"><Icon.Video/></button>
            {/* <button onClick={()=>btnClick('underline')} className={`note-btn btn${act['underline']?' active':''}`} title="Underline (CTRL+U)"><Icon.Underline/></button> */}
        </div>
        </div>
        </div>
        <div className="note-editing-area">
        <div ref={note} className="note-editable" onInput={(e)=>noteChange(e.target.innerHTML)} contentEditable={true} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html:props.val}} style={{minHeight:"150px", outline:0, padding:'10px'}}>
        {/* <p><br/></p> */}
        {/* <div></div> */}
        </div>
      </div>
    </div>
    )
}
export default TextEditor;