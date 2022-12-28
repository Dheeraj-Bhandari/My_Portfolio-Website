import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsGithub, BsMedium, BsYoutube, BsLinkedin, BsCodeSlash } from "react-icons/bs";
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <a href="."><img src={images.logo} alt="logo" /></a>
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills', 'experience', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              {item === 'experience' ?
                <a href='#skills'  rel="noreferrer">{item}</a> :
                <a href={`#${item}`} rel="noreferrer">{item}</a>

              }
            </li>

          ))}

          <li className="app__flex p-text" >
            <div />
              <a href='https://drive.google.com/file/d/1JrIgLdg0CFsATOQqy25UvI9AmbVcopIm/view?usp=sharing' target={'_blank'} rel="noreferrer">Resume</a>
          </li>
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              // whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'experience', 'contact'].map((item) => (
                  <li key={item}>
                    {/* <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a> */}
                    {item === 'experience' ?
                      <a onClick={() => setToggle(false)} href='#skills'  rel="noreferrer">{item}</a> :

                      <a onClick={() => setToggle(false)} href={`#${item}`} rel="noreferrer">{item}</a>
                    }
                  </li>

                
                ))}

                <li>
                <a onClick={() => setToggle(false)} href='https://drive.google.com/file/d/1JrIgLdg0CFsATOQqy25UvI9AmbVcopIm/view?usp=sharing' target={'_blank'} rel="noreferrer">Resume</a>
                </li>
              </ul>
              <ul className='navbarSocial'>
                <li><a href="https://github.com/Dheeraj-Bhandari" target={'_blank'} rel="noreferrer"> <BsGithub /></a>
                  <a href="https://leetcode.com/Dheeraj-bhandari/" target={'_blank'} rel="noreferrer"><BsCodeSlash /></a>
                  <a href="https://www.youtube.com/channel/UChXHt9pHik0rR0iZDOHNdsg" target={'_blank'} rel="noreferrer"><BsYoutube /></a>
                  <a href="https://www.linkedin.com/in/digitaldk/" target={'_blank'} rel="noreferrer"><BsLinkedin /></a>
                  <a href="https://digitaldk-in.medium.com/" target={'_blank'} rel="noreferrer"><BsMedium /></a>
                </li>

              </ul>
            </motion.div>
          )}
        </div>
      </nav>
      <div className="mycopyright">
        <p className="p-text"></p>
        <a href="https://drive.google.com/file/d/1JrIgLdg0CFsATOQqy25UvI9AmbVcopIm/view?usp=sharing"
          target={'_blank'}
          rel="noreferrer"
        >
          {toggle == true ? <img style={{ marginLeft: '-6rem', marginTop: '-3rem' }} src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="resume icon" /> : <img src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="resume icon" />}
          {/* <img  src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="resume icon" /> */}
        </a>
      </div>

    </>

  );
};

export default Navbar;