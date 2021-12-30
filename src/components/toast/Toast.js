import React, { useEffect, useRef } from 'react';

function Toast({ children, type, remove }) {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    const duration = 3000;
    const id = setTimeout(() => removeRef.current(), duration);

    return () => clearTimeout(id);
  }, []);
  
  const close = '&#x00D7';
  const color = type=='Success'?'#34c38f':type=='Warning'?'orange':type=='Info'?'blue':'#f46a6a';
  const icon = type=='Success'?'&#x2714':type=='Warning'?'&#x26A0':type=='Info'?'&#9432':'&#x2718;';

  return (
    <div className="tst">
      <div className="tst-content">
        <div className="tst-before" style={{backgroundColor:color}}></div>
        <div className="tst-icon" style={{backgroundColor:color}} dangerouslySetInnerHTML={{__html:icon}}></div>
        <div className="tst-text"><b className="tst-type">{type}</b><p className="tst-message">{ children }</p></div>
        <div onClick={remove} className="tst-close" dangerouslySetInnerHTML={{__html:close}}></div>
      </div>
    </div>
  );
}
export default Toast;