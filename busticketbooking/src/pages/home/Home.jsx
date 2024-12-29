import React from 'react'
import Hero from './hero/Hero'
import Services from './services/Services'

const Home = () => {
    return (
        <div className="w-full min-h-screen space-y-16 pd-16">
            {/* Hero */}
            <Hero/> 
            {/*Services*/}
            <Services/>
        </div>
    )
}

export default Home  