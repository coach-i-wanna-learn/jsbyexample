
import React,{useState, StrictMode,useEffect} from 'react'
import {motion,useMotionValue,useTransform} from "framer-motion";


const DragTrans = function() {
  
  const radiusMV = useMotionValue(0)
  
  const radius = useTransform(radiusMV,[-200,200],[10,40])
  
  return (
    <div className='flex justify-center items-center bg-[linear-gradient(180deg,#70f,#40f)]'>
      
      <div
        //  style={{
        //     display:'flex',
        //     flexDirection:'column',
        //      justifyContent:'center',
        //        alignItems:'center',
            
        //   }}
        className='flex flex-col justify-center items-center '
        >
          <motion.div
          style={{
            width:100,
            height:100,
            backgroundColor:'white',
            borderRadius:radius
          }}
          >
        </motion.div>

        <motion.div
          style={{
            x:radiusMV,
            height:20,
            width:6,
            borderRadius:2,
            backgroundColor:'white',
          }}
          drag="x"
          className='mt-4'
          dragMomentum={false}
          >
        </motion.div>

        <motion.span
          style={{
            letterSpacing:2,
            color:'white',
            opacity:0.3
          }}
          className='pt-4'
          >
          左右拖动我
        </motion.span>
      </div>
    </div>

  )
}

export default DragTrans
