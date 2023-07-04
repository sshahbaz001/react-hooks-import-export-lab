import React from "react";

function About() {

  const image = 'https://cdn.travelsafe-abroad.com/wp-content/uploads/manhattan.jpg';

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About; 
