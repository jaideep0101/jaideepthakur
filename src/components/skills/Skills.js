import React from 'react';
import "./skills.css";
import {FaNode} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {AiOutlineGithub} from "react-icons/ai";
import {BiGitBranch} from "react-icons/bi";
import {SiJavascript} from "react-icons/si";
import {FaBootstrap} from "react-icons/fa";
import {AiFillHtml5} from "react-icons/ai";
import {SiHeroku} from "react-icons/si";
import Skill from "../../assets/working.png";

const skills = [
  {skill:"React",
  image:<FaReact className='react icon'/>},
  {skill:"Node.js",
  image:<FaNode className='node icon'/>},
  {skill:"MongoDB",
  image:<SiMongodb className='mongodb icon' />},
  {skill:"GitHub",
  image:<AiOutlineGithub className='github icon' />},
  {skill:"Git",
  image:<BiGitBranch className='git icon' />},
  {skill:"Javascript",
  image:<SiJavascript className='javascript icon'/>},
  {skill:"Bootstrap",
  image:<FaBootstrap className='bootstrap icon'/>},
  {skill:"Html",
  image:<AiFillHtml5 className='html icon'/>},
  {skill:"Heroku",
  image:<SiHeroku className='heroku icon'/>
  }
]

const Skills = () => {
  return (
    <section id="skills" className='skills__container'>
    <div className='skills'>
    <h2>My Stack Tech</h2>
    <div className='skills_icons'>
    {
     skills.map(obj => (
      <div className='skill'>
        {obj.image}
        <p>{obj.skill}</p>
        </div>
      ))}
      </div>
</div>
<div className='skill__img'>
  <img src={Skill} alt="skill-img"/>
</div>
    </section>
  )
}

export default Skills