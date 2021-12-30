import React from 'react';

const InsertImage = props =>{
    const type = props.type

    const loadImage = evt =>{
        let thefile = evt.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(thefile);
        reader.onload = function() {
            props.setimg(reader.result);
        };
    }

    return(
        <div className="modal-body">
            {type=='image'&&<div className="form-group">
                <label className="form-label">Select from files</label>
                <input className="form-control" onChange={e=>loadImage(e)} type="file" name="files" accept="image/*" multiple="multiple"/>
            </div>}
            <div className="form-group">
                {type=='image'?<label className="form-label">Image URL</label>:
                <label className="note-form-label">Video URL <small className="muted">(YouTube, Vimeo, Instagram or DailyMotion)</small></label>}
                <input className="form-control" onChange={e=>props.setimg(e.target.value)} type="text"/>
            </div>
        </div>
    )
}
export default InsertImage;