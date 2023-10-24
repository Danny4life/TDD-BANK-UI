import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'

const HomePage = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <section>
            <SectionOne />  
        </section>
        <section>
            <SectionTwo />  
        </section>
       
       
      
    </div>
  )
}

export default HomePage
