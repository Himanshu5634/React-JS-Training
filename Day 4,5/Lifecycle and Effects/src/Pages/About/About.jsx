import React from 'react'

const About = ({text}) => {
  console.log(text,"text");
  
  return (
    <div>
      About
      <p>{text}</p>
    </div>
  )
}

export default About
