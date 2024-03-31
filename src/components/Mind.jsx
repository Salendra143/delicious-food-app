import React from 'react'
import { SwiggyImagesURl } from '../utlis/constants';


function Mind(props) {
  const { restobj } = props;


  return (
    <>
      <div className=' ml-5 w-[160px] flex border-b-2 mb-3 overflow-hidden' >
        <img className=' cursor-pointer ' src={SwiggyImagesURl + restobj.imageId} alt="" />
      </div>
    </>
  )
}

export default Mind