import { motion } from 'framer-motion'
import React from 'react'

function Landingpage() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.8"className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                <div className='first '>
                    <h1 className='text-8xl leading-[7vw] tracking-tighter uppercase font-bold'>I Create</h1>
                </div>
                <div className='first flex align-center'>
                    <motion.div initial ={{width:0}} animate = {{width:"7vw"}} transition = {{ease:[0.76,0,0.24,1], duration: 2}} className='w-[7vw] bg-red-500 h-[5vw] mt-5 rounded'>
                        <img className = 'w-full h-full bg-cover rounded'src="src\“juha west nothing a1 print”, by sven tillack - typo_graphic posters.jpg" alt="" />
                    </motion.div>
                    <h1 className='text-8xl leading-[7vw] tracking-tighter uppercase font-bold'>Mind Blowing</h1>
                </div>
                <div className='first '>
                    <h1 className='text-8xl leading-[7vw] tracking-tight uppercase font-bold'>Projects</h1>
                </div>
                <div className='w-1/2'>
                    <img src="src\self pic.jpg" alt="" className='rounded-full '/>
                </div>
            </div>
            <div className='border-t-2 border-zinc-200 mt-20 flex justify-between'>
                {["WEB" , "DESIGN" ,"DEVELOPER"].map((items,index)=><p className='text-xl tracking-tight leading-none mt-10 mr-10 ml-10'>{items}</p>)}
            </div>
        </div>
    )
}

export default Landingpage
