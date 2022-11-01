import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
import { images } from '../../constants'



const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <nav className='app__navbar'>
        <div className='app__navabr-logo'>
          <img  src={images.logo} alt="logo" />
        </div>
        <ul className='app__navabr-links'>
          {['home', 'about', 'work', 'skills', 'contact', 'resume'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>

              <div />
              {item === 'resume' ?
                <a href='https://docs.google.com/document/d/1UfCPCepAa2XXJ2z7HxYfP9zzkRrFdmS4/edit?usp=sharing&ouid=109558565411947281000&rtpof=true&sd=true' target={'_blank'} rel="noreferrer">{item}</a> :

                <a href={`#${item}`} rel="noreferrer">{item}</a>

              }


            </li>
          ))}
        </ul>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li className='app__flex p-text' key={item}>


                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>


                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
      <div className="mycopyright">
        <p className="p-text"></p>
        <a href="https://docs.google.com/document/d/1UfCPCepAa2XXJ2z7HxYfP9zzkRrFdmS4/edit?usp=sharing&ouid=109558565411947281000&rtpof=true&sd=true"
          target={'_blank'}
          rel="noreferrer"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="resume icon" />
        </a>
      </div>

    </>
  );
};

export default Navbar