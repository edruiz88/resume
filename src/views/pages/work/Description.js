import React from 'react'

const Description =props=>{
    return(
        <div className="work-description">
        <div className="block-title">
            <h4>Description</h4>
        </div>
        <ul className="work-info">
            <li><p><i className="fa fa-user"></i> Eduardo Ruiz</p></li>
            <li><p><i className="fa fa-globe"></i> <a href="#" target="_blank">www.busybit.site</a></p></li>
            <li><p><i className="fa fa-calendar"></i> 25 december, 2016</p></li>
        </ul>

        <p className="text-justify">{props.desc}</p>

        <div className="tags-block">
            <div className="block-title">
                <h4>Technology</h4>
            </div>
            <ul className="tags">
                {props.tags.map((d,i)=>
                <li key={i}><a>{d}</a></li>
                )}
            </ul>
        </div>
    </div>
    )
}
export default Description;