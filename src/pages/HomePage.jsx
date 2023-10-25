import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'

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
        <section>
            <SectionThree />  
        </section>
        <section>
            <SectionFour />  
        </section>
       
       
      
    </div>
  )
}

export default HomePage
