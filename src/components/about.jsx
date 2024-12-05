import React from 'react'

function About() {
    return (
        <div className='w-full py-20 relative bg-rose-500 rounded-tl-3xl rounded-tr-3xl'>
        <div className='w-full border-t-2 border-zinc-950 flex p-20 mt-20'>
           <div className='w-1/2 '>
           <h1 className='text-7xl mt-64 font-semibold text-pink-950'>Chaitanya balireddi</h1>
           <ol className='mt-6 text-lg ml-6 text-slate-950'>
            <li>
              Completed B.C.A(bachelor of computer applications) at Glocal University
            </li>
            <li>
              Completed UI/UX devlopment Course in Tech Mahindra Foundation
            </li>
           </ol>
           
           <button className='px-8 py-6 bg-slate-900 rounded-full mt-10 text-lg font-light'>Download Resume</button>
           <h1 className='text-7xl text-black mt-6'>Skills</h1>
           <div className='flex items-center  ml-6'>
           <ul className='text-xl text-black mt-10 leading-10'>
            <li>HTML5 & CSS3             <span  >-100%</span></li>
            <li>Tailwind CSS <span>-100%</span></li>
            <li>Javascript <span>-85%</span></li>
            <li>React Js <span>-80%</span></li>
            <li>Photoshop <span>-80%</span></li>
            <li>Illustrator <span>-75%</span></li>
           </ul>
           
           </div>
           
           </div>
           <div className='w-1/2 h-[50vw] border-3 rounded-3xl border-zinc-900 overflow-hidden bg-slate-900'>
           <img src="src\resume.png" alt="" className='w-full h-full object-contain'/>
           </div>
           
        </div>
        
        </div>

    )
}

export default About
