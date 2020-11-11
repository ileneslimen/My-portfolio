
import React from 'react';

const About = ({name,image}) => {

return (<section id="about-me">
  <h1>
     Hello my name is <span className="text-important">{name}</span> ,<br />
     and i make a horrible websites
  </h1>
   <img  style= {{width:'300px', height:'250px'}}className="avatar" src={image } alt="jhon-doe" />

      </section>)};

export default About
