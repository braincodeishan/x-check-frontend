// THIS IS THE BACKGROUND FOR HOME PAGE


import React, {memo} from 'react'
// import ReactJSXWrapper from './ReactJSXWrapper'
import img1 from '../../Assets/Images/1.png'

import img4 from '../../Assets/Images/4.png'
const Background = (props) => {
  // const IMG1=ReactJSXWrapper(
    const IMG1=<div className='plx-block-1 entrance-left'>
  <img src={img1} alt='phone'  className='parallax-image plx-1 '/>
  {/* <img src={img2} alt='phone'  className='parallax-image plx-2'/> */}
  </div>//,0.03)
    

  // const IMG2=ReactJSXWrapper(
    const IMG2=<div className='plx-block-2 entrance-right'>
  {/* <img src={img3} alt='phone'  className='parallax-image plx-3'/> */}
  <img src={img4} alt='phone'  className='parallax-image plx-4'/>
  </div>//,0.1)
  return (
    <>
    
      {/* <IMG1/> */}
    
    
      {/* <IMG2/> */}
    
    {IMG1}
    {IMG2}
    </>
    
  )
}

export default memo(Background);