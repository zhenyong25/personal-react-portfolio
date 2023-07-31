import React from "react";
 
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About" 
import Experience from "./components/experience/Experience" 
import Portfolio from "./components/portfolio/Portfolio" 
import Internship from "./components/internships/internship";
import Social from "./components/socials/Social";
// import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact" 
import Footer from "./components/footer/Footer"


const App = () => {
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            {/* <Testimonials/> */}
            <Internship/>
            <Social/>
            <Contact/>
            <Footer/>
            
        </>
    )
}


export default App; 