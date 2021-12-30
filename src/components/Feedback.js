import React, { useEffect, useState } from "react";

export default function Feddback(props){
    const [chosen, setChosen] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);
    const [anim, setAnim] = useState(0)
    const [showAnim, setShowAnim] = useState(false)
    const comm = chosen!='';
    const empty = !feedback.trim().length;

    const data = [{emo:'Block', col:'#f00a0a', icon:['m9.5 16.5 Q 12.5 11 15.5 16.5','M0.9,7 L9,9.5', 'M16,9.5 L24.1,7']},
                  {emo:'Dislike', col:'#ff6438', icon:['m9.5 15 Q 12.5 11 15.5 15']},
                  {emo:'Neutral', col:'#ffd309', icon:['M9,15 C13,13 12,17 16,15']},
                  {emo:'Like', col:'#17d966', icon:['m9.5 14 Q 12.5 17 15.5 14']},
                  {emo:'Trust', col:'#00a546', icon:['M8.5,14 C9,20 15,22 16.5,14 11.5,11.5 8.5,14 8.5,14', 'M10,17.4 C12.8,14.5 16,18 15.1,17.4']}]
    
const closePane=(e)=>{
    if (props.feedRef.current && !props.feedRef.current.contains(e.target)) {
    closeFeed();
    }
}
useEffect(() => {
    if(props.feed){
        document.addEventListener("mousedown", closePane);
        return () => {
            document.removeEventListener("mousedown", closePane);
        };
    }
}, [props.feed]);

const closeFeed=()=>{
    setChosen('')
    setFeedback('');
    props.closeFeed();
}
const submitFeed=async(e)=>{
    const emo = chosen=='Block'?0:chosen=='Dislike'?1:chosen=='Neutral'?2:
                chosen=='Like'?3:4
    // e.preventDefault();
    setLoading(true)
    setTimeout(()=>{
        props.review({emo:emo, time:Date.now(), comm:feedback});
    },800)
    
}
useEffect(()=>{
    let timerID;
    if(showAnim&&anim<=5){
      timerID = setInterval(() =>setAnim(e=>e+1), 100);
    }
    return () => clearInterval(timerID);
},[showAnim && anim])

useEffect(()=>{
    setTimeout(()=>setShowAnim(true),150)
},[props.feed])

return(
    <>
   <a onClick={()=>closeFeed()}><span className="icon icon-x"></span></a>
   <h6 className="feed_title" style={{display:comm?'none':'block'}}>How would you rate <b>{props.trader}</b>?</h6>
   <div className={`feed_content${comm?' chosen '+chosen.toLowerCase():''}`}>
        <div className="emotion_content" style={{marginBottom:comm?'10px':'50px'}}>

        {data.map((e, i) => 
            <div key={i} className={`emotion_option ${e.emo.toLowerCase()}${chosen==e.emo?' active':''}${anim>i?' fade':''}`} onClick={()=>setChosen(e.emo)} style={{backgroundColor:e.col}}>
                <span className="emotion_text">{e.emo}</span>
                <span className="icon icon_def icon_block">

                    <svg
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke={'black'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round">

                        <circle cx="4" cy="11" r="3"></circle>
                        <circle cx="21" cy="11" r="3"></circle>
                        {e.icon.map((e, i)=>
                        <path key={i} d={e}/>
                        )}

                    </svg>
                </span>
            </div>
        )}

        </div>
        <div className="emotion_comment_holder" style={{display:comm?'block':'none'}}>
        <textarea
            onChange={(e)=>setFeedback(e.target.value)}
            maxLength="1000"
            className="input_field"
            name="emo_comment"
            placeholder={`Tell us about your experience with this product.`}
            rows="3">
        </textarea>
        </div>
        <div className="emotion_comment_footer" style={{display:comm?'block':'none'}}>
            <div className="act_btn">
                <button id="action_submit" className={`btn btn-sm transition shadow${empty?' btn_disabled':` ${loading?'btn-progress ':''}btn-primary`}`} onClick={(e)=>submitFeed(e)}>Send</button>
            </div>
        </div>
    </div>
    </>
    )
}