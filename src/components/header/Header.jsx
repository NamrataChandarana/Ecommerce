import React from 'react'
import { navIcons } from '../../constant'
import { useRef } from 'react'
import { sideMenu } from '../../constant'
import { useState } from 'react'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   

    const sideMenuRef = useRef();
    function handleMenu(){
        sideMenuRef.current.classList.remove('md:hidden');
        sideMenuRef.current.classList.remove('hidden');
        // setIsSidebarOpen(!isSidebarOpen);
    }
    function hanldeClose(){
        sideMenuRef.current.classList.add('md:hidden');
        sideMenuRef.current.classList.add('hidden');
    }
  return (
    <>
    <div className='sticky border-b-2 border-lightgray-[2px] top-0 z-10 bg-white sticky:shadow-md'>
    <div className='py-[1.2rem] px-[2rem] flex justify-between '>
        <div className=''>
            <img src="/navicon/hamburger-menu.svg" alt="menu" width="40px" height="20px" onClick={handleMenu}/>
        </div>
        <div className=''>
            <img src="/blackoption.webp" alt="logo" className=' object-cover' width="200px" height="50px"/>
        </div>
        <nav className='pt-[1rem]'>
            <div className='flex gap-x-3.5'>{navIcons.map((item, index)=>(
               
                // console.log(item.src)
                <img  key={index} src={item.src} alt={item.name} width="20px" height="10px"  className={item.name ==="search" || item.name === "cart" || item.name === "user" ? '' : ''}/>
                
            ))}</div>
        </nav>
    </div>
    </div>
    

    <div ref={sideMenuRef}  className={` ${isSidebarOpen ? 'overflow-hidden' : ''} hidden md:hidden h-[600px] w-[300px] bg-white z-10 absolute top-0 shadow-lg shadow-indigo-500/40 p-[1.6rem]`}>
        <div className=' border-b-4 border-lightgray-[2px]'>
            <div className='flex justify-between pb-[1em]'>
                <p>LOG IN</p>
                <img src="/navicon/close.svg" alt="" width="18px" height="8px" onClick={hanldeClose}/>
            </div>
        </div>
        <div className=''>
            <div className='flex flex-col '>
                {
                    sideMenu.map((item, index)=>(
                        <a href={item.link} className="pt-[2rem] ">{item.name}</a>
                    ))
                }
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Header