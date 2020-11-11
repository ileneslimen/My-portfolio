import React from 'react';

const Navbar = (props) => {
return ( 
  <header>
      <h1>Nourhen Slimen</h1>
      <ul class="navmenu">
       {props.navLinks.map ((el, i )=> { 
       
          return <li key= {i}><a href={el.href}> {el.link}</a> </li>
 })}
      </ul>
  </header> )};

export default Navbar