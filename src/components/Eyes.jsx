import React, { useEffect, useState } from 'react'

function Eyes() {

    const[rotate , setRotate] = useState(0)

     useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{

            let X = e.clientX;
            let Y = e.clientY;

            let deltaX = X - window.innerWidth/2;
            let deltaY = Y - window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX)*180/Math.PI;
            setRotate(angle-180);
        })
     })

    return (
        <div className='eyes w-full h-screen pt-32 pl-52 pr-52 pb-32 overflow-hidden'>
            <div data-scroll data-scroll-speed= "-.8" className='relative w-full h-full bg-center bg-gradient-to-r from-purple-700 to-pink-500'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
                    <div className='w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full'>
                        <div className='w-2/3 h-2/3 bg-zinc-900 relative rounded-full'>
                          <div style = {{transform : `translate(-50%,-50%) rotate(${rotate}deg)`, }}className='line h-10 absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-full'>
                              <div className='w-10 h-10 rounded-full bg-zinc-100 '>
                              </div>
                          </div>
                             
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full'>
                        <div className='w-2/3 relative h-2/3 bg-zinc-900 flex justify-center items-center rounded-full'>
                        <div style = {{transform : `translate(-50%,-50%) rotate(${rotate}deg)`, }}className='line h-10 absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-full'>
                              <div className='w-10 h-10 rounded-full bg-zinc-100 '>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
