import React, {useState, useRef} from 'react';
import UseFeedback from '../../../components/Feedback';
import Description from './Description';
import Scroll from '../../../components/CustomScroll'
import * as Icon from '../../../components/icons'

const FeedBack =()=>{
  const [feed, setFeed] = useState(false);
  const [rev, setRev] = useState([{emo:4, time:new Date('2021-12-22T07:29:01+0000'), comm:'exellent'}, {emo:4, time:new Date('2021-12-21T15:29:01+0000'), comm:'exellent developer'}, {emo:4, time:new Date('2021-12-21T15:29:01+0000'), comm:'Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.'},
              {emo:4, time:new Date('2021-12-20T10:29:01+0000'), comm:'exellent'}, {emo:4, time:new Date('2021-12-21T15:29:01+0000'), comm:'test comment'}, {emo:4, time:new Date('2021-12-21T15:29:01+0000'), comm:'exellent developer'},
              {emo:4, time:new Date('2021-12-20T15:29:01+0000'), comm:'Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.'}, {emo:4, time:new Date('2021-12-21T15:29:01+0000'), comm:'test comment'}, {emo:4, time:new Date('2021-12-21T15:29:01+0000'), comm:'exellent developer'},
              {emo:4,time:new Date('2021-12-20T15:29:01+0000'), comm:'Interdum et malesuada fames ac ante ipsum primis in faucibus.'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},
              {emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},
              {emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'},{emo:4,time:'none', comm:'h'}])

  const feedRef = useRef('');
  const trader = 'Mareea';

  const pos = rev.filter((e)=>e.emo==4||e.emo==3).length
  const neg = rev.filter((e)=>e.emo==0||e.emo==1).length

  const data = [{col:'#f00a0a', icon:['m9.5 16.5 Q 12.5 11 15.5 16.5','M0.9,7 L9,9.5', 'M16,9.5 L24.1,7']},
                {col:'#ff6438', icon:['m9.5 15 Q 12.5 11 15.5 15']},
                {col:'#ffd309', icon:['M9,15 C13,13 12,17 16,15']},
                {col:'#17d966', icon:['m9.5 14 Q 12.5 17 15.5 14']},
                {col:'#00a546', icon:['M8.5,14 C9,20 15,22 16.5,14 11.5,11.5 8.5,14 8.5,14', 'M10,17.4 C12.8,14.5 16,18 15.1,17.4']}]

const times = [["second", 1], ["minute", 60], ["hour", 3600], ["day", 86400], ["week", 604800], ["month", 2592000], ["year", 31536000]]

function timeAgo(date) {
    var diff = Math.round((new Date() - date) / 1000)
    for (var t = 0; t < times.length; t++) {
        if (diff < times[t][1]) {
            if (t == 0) {
                return "Just now"
            } else {
                diff = Math.round(diff / times[t - 1][1])
                return diff + " " + times[t - 1][0] + (diff == 1?" ago":"s ago")
            }
        }
    }
}

const review =data=>{
    setRev(msg => [data, ...msg]);
    setFeed(false)
}
const percent=(pos, neg)=>{
  const Total = pos + neg+0.001
  const multiply = pos*100
  const perc = multiply/Total

  return (perc).toFixed()
}

  return (
    <div className="work-content d-flex">
        <div className="show-work col">
          <div id="grid">
            <div className={'f-card'} id="A">
              <div className={'ucontent'}>
                <img src={'img/eduardo.png'}/>
                <div className={'namecntnt'}>
                  <div className={'uname'}>Eduardo Ruiz</div>
                  <div className={'udesc'}>Web Developer</div>
                </div>
                <div className={'profile-btn'} onClick={()=>setFeed(true)}><Icon.Message/></div>
              </div>
            </div>
            <div className={'f-card'} id="B">
              <div className={'msgcount'}>
                <Icon.Message/>
                <div className={'count'}>{rev.length}</div>
                <div style={{textAlign:'center',color:'#00a546', fontWeight:'bold'}}>({percent(pos, neg)}%)</div>
              </div>
              <div className={'trustcount'}>
                <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke={'black'}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round">

                    <circle cx="4" cy="11" r="3"></circle>
                    <circle cx="21" cy="11" r="3"></circle>
                      {data[4].icon.map((e, i)=>
                        <path key={i} d={e}/>
                      )}
                </svg>
                <div className={'count'}>{rev.filter((e)=>e.emo==4).length}</div>
              </div>
              <div className={'blockcount'}>
                <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke={'black'}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round">

                    <circle cx="4" cy="11" r="3"></circle>
                    <circle cx="21" cy="11" r="3"></circle>
                      {data[0].icon.map((e, i)=>
                        <path key={i} d={e}/>
                      )}
                </svg>
                <div className={'count'}>{rev.filter((e)=>e.emo==0).length}</div>
              </div>
            </div>
            <div className={'f-card'} id="C">
              <div className={'f-card-title'}>Last 10 reviews</div>
                <Scroll>
                  <div className={`scroll-zone`} style={{height:'242px', padding:'4px'}}>
                      {rev.slice(0, 10).map((e, i)=>
                        <div key={i} className={'reviews'}>
                          <div className={'comm-user'}>Anonymous<span className={'muted'}>• {timeAgo(e.time)}</span></div>
                            <svg
                                viewBox="0 0 25 25"
                                fill="none"
                                stroke={data[e.emo].col}
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round">

                                <circle cx="4" cy="11" r="3"></circle>
                                <circle cx="21" cy="11" r="3"></circle>
                                  {data[e.emo].icon.map((e, i)=>
                                    <path key={i} d={e}/>
                                  )}
                            </svg>
                          <div className={'f-comm'}>{e.comm}</div>
                        </div>
                      )}
                  </div>
                </Scroll>
            </div>
          </div>
            {/* <button className={'btn btn-light'} onClick={()=>setFeed(true)}>open</button>*/}

            {feed&&(<div className="feed_container">
                <div ref={feedRef} className={`feedback`} style={{display:feed?'block':'none'}}>
                    <UseFeedback closeFeed={()=>setFeed(false)} trader={trader} feedRef={feedRef} feed={feed} review={review}/>
                </div>
            </div>)}

        </div>
        <Description tags={['JS','React Hooks','CSS','HTML5']} desc={'A fun and responsive Feedback form, created with React Hooks using less than 150 lines of code, ideal for collecting opinions about your service, in order to gain a better understanding of the overall customer.'}/>
    </div>
  )
}
export default FeedBack;