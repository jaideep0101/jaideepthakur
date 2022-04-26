import React from 'react';
import "./about.css";
import Image from "../../assets/my image.jpg"


const About = () => {
  return (
    <section id="about" className='about__container'>
    <div className='main__container'>
    <div className='image__container'>
<img src={Image} alt="img"></img>
    </div>
    <article className='text'>
    <h1>About Me</h1>
<p>Hello, My name is Jaideep Singh Thakur. A Programmer based in Indore, Hold a Master's degreee in Computer Application. I am exemplary at C and C++. Highly dedicated towards all coding related challenges.</p>
    </article>
</div>
    </section>
  )
}

export default About;