import React from 'react'
import "./project.css";
import pro1 from "../../assets/yelp.png";
import pro2 from "../../assets/catmash.png";
import pro3 from "../../assets/gpt3.png";
import {BiLinkExternal} from "react-icons/bi";
import {AiFillGithub} from "react-icons/ai"

const data =[
  {
  name:"YelpCamp",
  image:pro1,
  github:"//github.com/jaideep0101/yelpcamp.git",
live:"//yelpcamp0101.herokuapp.com/",
},
{
  name:"Catmash",
  image:pro2,
  github:"//github.com/jaideep0101/catmash.git",
live:"//catmash0101.herokuapp.com/",
},
{
  name:"Gpt3 React Website",
  image:pro3,
  github:"//github.com/jaideep0101/react-website.git",
live:"//react-web-jaideep0101.netlify.app/",
},

]

const Projects = () => {
  return (
    <section id="project" className='project__container'>
       <h1>Projects</h1>
       <div className='projects'>
{
  data.map(d=>(
    <div className='project'>
    <img className='pro__img' src={d.image} alt="project-image"/>
    <h4>{d.name}</h4>
    <div className='btn'>
    <a href={d.github}className='btn__source'>Source Code<AiFillGithub/></a>
    <a href={d.live} className='btn__live'>Live Project<BiLinkExternal/></a> 
  </div>
    </div>
  ))
}
 
</div>
    </section>
  )
}

export default Projects