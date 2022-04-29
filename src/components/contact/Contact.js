import React from 'react';
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {BiSend} from "react-icons/bi";
import{MdDone} from"react-icons/md";
import{AiOutlineCopyrightCircle} from"react-icons/ai";


const contacts=[{
  name:"GitHub",
  image:<a href="https://github.com/jaideep0101"><AiFillGithub className='social'/></a>
},
{
  name:"Linkedin",
  image:<a href="https://www.linkedin.com/in/jaideep-singh-thakur-3329b320b/"><FaLinkedinIn className='social'/></a>
},
{
  name:"Twitter",
  image:<a href="https://twitter.com/Jaideepthakur01"><BsTwitter href="//twitter.com/Jaideepthakur01" className='social'/></a>
},
{
  name:"jaideepst0101@gmail.com",
  image:<a href="mailto:jaideepst0101@gmail.com"><AiOutlineMail  className='social'/></a>
}
]

const Contact =()=>{
const [state, handleSubmit] = useForm("mrgjognb");

  return (
    <section id="contact" className='contact__container'>
    <h2>Let's Connect</h2>
    <div className='contacts'>
    <div className='social__details'>
    { contacts.map(contact => (
<div className='social__info'>
{contact.image}
<h5>{contact.name}</h5>
</div>
))}
</div>
    <div className='form__cotnainer'>
    <h3>Drop Your Mail</h3>
<form onSubmit={handleSubmit} className='form'>
<input type="email" autoComplete='off' placeholder='Your Email:' required/>
<ValidationError prefix="Email" field="email"errors={state.errors}/>
<textarea name="message" type="text" rows="6" placeholder='Message:' />
<ValidationError prefix="Message" field="message"errors={state.errors}/>
<button  disabled={state.submitting}  className="btn-submit">Send<BiSend/></button>
</form>
</div>
</div>
   {
    (state.succeeded) &&(
  <div className='success__message'>
  <p>Message Send <span><MdDone/></span></p>
    </div>
  )}
<div className='footer'>
<p><AiOutlineCopyrightCircle/>Jaideep singh Thakur</p>
</div>
</section>
  )}
export default Contact;