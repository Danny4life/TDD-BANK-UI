import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import Footer from '../components/Footer'

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
        <section className="pb-10">
            <SectionFour />  
        </section>
        <footer>
          <Footer />
        </footer>
       
       
      
    </div>
  )
}

export default HomePage
