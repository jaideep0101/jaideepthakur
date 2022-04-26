import React,{useState} from 'react';
import "./navbar.css";
import CV from "../../assets/Resume Jaideep singh thakur.pdf";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClear} from "react-icons/md";

const Navbar = ()=>{
  const[toggle,setToggle]= useState(false);
  const [activeNav,setActiveNav] = useState("#home");
  return (
    <nav>
    <div className='menu__container'>
  <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}>Home</a>
  <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""} >About Me</a>
  <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav === "#skills" ? "active" : ""}>Skills</a>
  <a href="#project" onClick={()=>setActiveNav("#project")} className={activeNav === "#project" ? "active" : ""} >Projects</a>
  <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""} >Contact</a>
  <button className='cv'><a href={CV}download>Download CV</a></button>
    </div>
     <div className='toggleMenu__container'>
       <h2 className='logo'>Jaideep Singh Thakur</h2>
     {toggle ? <MdClear className='toggleIcon' onClick={()=>setToggle(false)}/>:
     <GiHamburgerMenu className='toggleIcon' onClick={()=>setToggle(true)}/>}
    {toggle && (
      <div className='smallMenu__container'>
 <a onClick={()=>setToggle(false)} href="#home">Home</a>
  <a onClick={()=>setToggle(false)} href="#about">About Me</a>
  <a onClick={()=>setToggle(false)} href="#skills">Skills</a>
  <a onClick={()=>setToggle(false)} href="#project">Projects</a>
  <a onClick={()=>setToggle(false)} href="#contact">Contact</a>
  <button onClick={()=>setToggle(false)} className='cv'><a href={CV}download>Download CV</a></button>
    </div>
    )}
     </div>
    </nav>
  )
}

export default Navbar