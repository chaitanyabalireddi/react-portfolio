import React from 'react'

function Navbar() {
    return (
        <div className='fixed z-[999] backdrop-blur-xl w-full px-20 py-8 font-sans-serif-roboto flex justify-between items-center'>
            <div className='logo'>
               <h1 className='text-4xl font-light'>Chaitanya</h1>
            </div>
            <div className='links flex gap-10'>
                {["Home" , "About" ,"Skills","My Works"   ,"Contact Me"].map((item, index) => (  
                    <a key = {index} className= {`text-lg font-light ${index == 4 && "ml-32"}`}>{item}</a>
                ))}
            </div>
        </div>
    )
}

export default Navbar
