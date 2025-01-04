import React, { useState, useEffect, useRef } from 'react'
import { use } from 'react';

const ToggleBtn = ({ buttonText, buttonTextHidden, children }) => {

    const [isVisible, setIsVisible] = useState(true);
    const toggleRef = useRef(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    // hande the click outside the toggle button

    const handleOutsies = (e) =>{
        if (toggleRef.current && !toggleRef.current.contains(e.target)) {
            setIsVisible(false);
        }
    }


    useEffect(() => {
        document.addEventListener('mousedown', handleOutsies);
        return () => {
            // remove event listener
            document.removeEventListener('mousedown', handleOutsies);
        };
    }, []);



  return (
    <div className='w-full h-auto' ref={toggleRef}>
      <button
        onClick={toggleVisibility}
        className={`w-fit px-4 py-2 border-2 border-primary rounded-lg text-primary hover:bg-primary $
        {!isVisible ? 'bg-primary text-neutral-50' : 'border-primary 
        bg-transparent text-primary'} rounded-lg transition`}
        >
        {isVisible ? buttonTextHidden : buttonText}
      </button>



        {isVisible && (
            <div className='mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm  '> 

                {children}


            </div>
        )} 

    </div>
  )
}

export default ToggleBtn