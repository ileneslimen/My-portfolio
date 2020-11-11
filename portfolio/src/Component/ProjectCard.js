
import React from 'react'

const ProjectCard = (props ) => { 
  
  return (
   
     <div className="project-card"  >

        {props.project.map ((el, i )=> { 
           return (<div key={i}>
             <img src={el.image} style={{width:'300px'}} alt="project" />
             <p>{el.para} </p>  
             <p>Github <a href={el.href}>{el.link}</a></p>
                 </div>
              )})
         }
      </div>
     )};
  
export default ProjectCard