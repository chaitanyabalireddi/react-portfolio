
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
   const[ishover,setHover]= useState(false);
   const[onhover,setHover1]= useState(false);
   const[onhover1,setHover2]= useState(false);
   const[onhover2,setHover3]= useState(false);


    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-2 pb-10 '>
                <h1 className='text-5xl font-semibold font-sans '>My Projects</h1>
            </div>
            <div className='cards w-full flex wrap gap-10 mt-20 px-20'>
                <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className=' relative container w-1/2 h-60vw rounded-xl '>
                       <h1 className='absolute flex overflow-hidden top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-8xl text-amber-500 font-sans  font-bold tracking-tight z-[999]'>
                       {"FLYERS".split("").map((item,index) =>(
                        <motion.span initial={{y: "100%"}} animate = {ishover ? {y: "0"} : {y:"100%"}} transition={{ease: [0.87, 0, 0.13, 1], delay : index*.07}} className='inline-block '>{item}</motion.span>
                       ))}
                       </h1>
                       <img className = 'w-full h-full bg-cover'src="src\flyer1.png" alt="" />
                </div>
                <div onMouseEnter={()=> setHover1(true)} onMouseLeave={()=> setHover1(false)} className='container w-1/2 relative h-60vw rounded-xl '>
            <h1 className='flex overflow-hidden absolute top-1/2 right-full translate-x-1/2 translate-y-1/2 text-8xl text-amber-500 font-sans font-bold tracking-tight z-[999]'>
                       {"DESIGNS".split("").map((item,index) =>(
                        <motion.span initial={{y: "100%"}} animate = {onhover ? {y: "0"} : {y:"100%"}} transition={{ease: [0.87, 0, 0.13, 1], delay : index*.07}} className='inline-block '>{item}</motion.span>
                    ))}
                       
                       </h1>
                       <img className = 'w-full h-full bg-cover'src="src\Flyer 2.png" alt="" />
                </div>
                
            </div>
            <div className='cards w-full flex wrap gap-10 mt-20 px-20'>
                <div onMouseEnter={()=>setHover2(true)} onMouseLeave={()=> setHover2(false)} className=' relative container w-1/2 h-60vw rounded-xl '>
                       <h1 className='absolute flex overflow-hidden top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-8xl text-rose-500 font-mono  font-semibold tracking-tight z-[999]'>
                       {"FLYERS".split("").map((item,index) =>(
                                                <motion.span initial={{y: "100%"}} animate = {onhover1 ? {y: "0"} : {y:"100%"}} transition={{ease: [0.87, 0, 0.13, 1], delay : index*.07}} className='inline-block '>{item}</motion.span>
                       ))}
                       </h1>
                       <img className = 'w-full h-full bg-cover'src="src\flyer 3.png" alt="" />
                </div>
                <div onMouseEnter={()=> setHover3(true)} onMouseLeave={()=> setHover3(false)} className='container w-1/2 relative h-60vw rounded-xl '>
                       <h1 className='absolute flex overflow-hidden top-1/2 right-full translate-x-1/2 translate-y-1/2 text-8xl text-rose-500 font-mono  font-bold tracking-tight'>
                       {"POSTERS".split("").map((item,index) =>(
                         <motion.span initial={{y: "100%"}} animate = {onhover2 ? {y: "0"} : {y:"100%"}} transition={{ease: [0.87, 0, 0.13, 1], delay : index*.07}} className='inline-block '>{item}</motion.span>
                       ))}
                       </h1>
                       <img className = 'w-full h-full bg-cover'src="src\poster1.png" alt="" />
                </div>
                
                
                
            </div>
            <div className='cards w-full flex wrap gap-10 mt-20 px-20'>
                <div onMouseEnter={()=>setHover2(true)} onMouseLeave={()=> setHover2(false)} className=' relative container w-1/2 h-60vw rounded-xl '>
                       <h1 className='absolute flex overflow-hidden top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-8xl text-rose-500 font-mono  font-semibold tracking-tight z-[999]'>
                       {"POSTERS".split("").map((item,index) =>(
                                                <motion.span initial={{y: "100%"}} animate = {onhover1 ? {y: "0"} : {y:"100%"}} transition={{ease: [0.87, 0, 0.13, 1], delay : index*.07}} className='inline-block '>{item}</motion.span>
                       ))}
                       </h1>
                       <img className = 'w-full h-full bg-cover'src="src\poster2.png" alt="" />
                </div>
                <div onMouseEnter={()=> setHover3(true)} onMouseLeave={()=> setHover3(false)} className='container w-1/2 relative h-60vw rounded-xl '>
                       <h1 className='absolute flex overflow-hidden top-1/2 right-full translate-x-1/2 translate-y-1/2 text-8xl text-rose-500 font-mono  font-bold tracking-tight'>
                       {"POSTERS".split("").map((item,index) =>(
                         <motion.span initial={{y: "100%"}} animate = {onhover2 ? {y: "0"} : {y:"100%"}} transition={{ease: [0.87, 0, 0.13, 1], delay : index*.07}} className='inline-block '>{item}</motion.span>
                       ))}
                       </h1>
                       <img className = 'w-full h-full bg-cover'src="src\poster3.png" alt="" />
                </div>
                
                
                
            </div>
        </div>
    
    )
}

export default Featured
