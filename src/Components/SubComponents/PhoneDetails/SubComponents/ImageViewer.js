import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

const ImageViewer = (props) => {
  return (
    <div className="ImageViewer">
        <div className="IV-Box">
            <CancelIcon
            className='IV-Cancel animateZoom'
            onClick={()=>{props.setshowImage(null)}}
            />
            <div className="IV-ImageBox">
                <img src={props.image} alt={props.image} srcSet={props.image} className='IV-Images'/>
            </div>
        </div>
    </div>
  )
}

export default ImageViewer