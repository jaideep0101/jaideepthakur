import React from 'react';
import "./home.css";
import hero from "../../assets/Hero.png";
import {AiOutlineMail} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
const Home = () => {
  return (
    <section id="home" className='container'>
    <div className='home__container'>
       <div className='hero__text'>
         <h1>Hey,</h1>
         <h1>I'm <span className='name'></span></h1>
         <div className='home__text'>
         <p>I better introduce myself as a Ferrari engine. You don't notice me, but when you do, I fly by. Want to Experience the Thrill. Contact me</p>
         </div>
         <div className='socials'>
         <a className='icons' href="https://www.linkedin.com/in/jaideep-singh-thakur-3329b320b/"><FaLinkedinIn /></a>
         <a className='icons' href="https://twitter.com/Jaideepthakur01"><BsTwitter /></a>
         <a className='icons' href="mailto:jaideepst0101@gmail.com"><AiOutlineMail /></a>
         </div>
       </div>
       <div className='hero__img'>
       <div className='hero__background'>
<img src={hero} alt="hero__img"/>
</div>
</div>
       </div>

    </section>
  )
}

export default Home;