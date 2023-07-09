import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (

    // placing a download attributes so that the file is able to be downloaded 
    <div className='cta'>
        <a href={CV} downlaod className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA