import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
            {/* Hero section */}
            <div className="flex items-center justify-center w-full h-screen">
                <h1 className='text-5xl font-bold text-neutral-950'>
                    this is the Hero section
                </h1>
            </div>
            {/* About */}
            <div className="flex items-center justify-center w-full h-screen bg-neutral-950">
                <h1 className='text-5xl font-bold text-neutral-50'>
                    this is the About section
                </h1>
            </div>

        </div>
    )
}

export default Home  