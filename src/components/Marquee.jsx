
import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full mt-80 py-20 rounded-tl-3xl rounded-tr-3xl bg-rose-300 '>
            <div className='border-t-2 border-b-2 align-center border-zinc-900 flex overflow-hidden whitespaces-nowrap '>
            <marquee scrollamount = "30" className='text-[15vw] leading-none text-zinc-900 font-bold border-3 -pt-15 mb-7'>Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev Web Dev</marquee>
            </div>
        </div>
        
    )
}

export default Marquee
