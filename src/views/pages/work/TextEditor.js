import React, {useState} from 'react';
import UseTextEditor from '../../../components/TextEditor';
import Description from './Description';

function TextEditor(){
const placeholder ='<div><br></div><div><br></div><div><br></div><div style="text-align:center;font-size:25px;"><b>Start editing text below</b></div>';
const [txt, setTxt] = useState(placeholder)

const typing= txt =>{
    console.log(txt)
    txt==''?setTxt(placeholder):setTxt(txt)
}

  return (
    <div className="work-content d-flex">
        <div className="show-work col">
        <div className="display-txt" dangerouslySetInnerHTML={{__html:txt}}/>
            <UseTextEditor text={(e)=>typing(e)}/>
        </div>
        <Description tags={['JS','React Hooks','CSS']} desc={'A WYSIWYG text editor, responsive and compact but complete, created with React Hooks using less than 150 lines of code, ideal to improve the user experience.'}/>
    </div>
  )
}
export default TextEditor;