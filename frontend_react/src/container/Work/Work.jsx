import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub ,AiFillYoutube } from 'react-icons/ai'
import {  motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client';
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from "@sanity/client"
import './Work.scss'

const Work = () => {
  const [activeFilter, setactiveFilter] = useState('All')
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setworks] = useState([])
  const [filterWork, setfilterWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data)=>{
      console.log(data);
      setworks(data);
      setfilterWork(data);
    })
  }, [])





  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{y:100, opacity:0}]);

    setTimeout(()=>{
      setanimateCard([{y:0,opacity:1}])
      if(item==='All'){
        setfilterWork(works);
      }
      else {
        setfilterWork(works.filter((work)=> work.tags.includes(item)))
      }

    },500)
  }
  return (
    <>
      <h2 className='head-text'>My Creative<span> Projects</span> Section</h2>
      <h3 ><span style={{color:"blue"}}> Hover</span> On Project to See Link</h3>
      <div className="app__work-filter">
        {['FrontEnd', 'BackEnd', 'FullStack', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {works.map((work, index)=>(
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {console.log(urlFor(work.imgUrl))}
              <img src={urlFor(work.imgUrl)}  alt="work img" />
            <motion.div
            whileHover={{opacity:[0,1]}}
            transition={{duration:0.25, ease:'easeInOut', staggerChildren:0.5}}
            className='app__work-hover app__flex'
            >
              <a href={work.projectLink} target="_blank" rel='noreferrer'>

                <motion.div
                whileInView={{scale:[0,1]}}
                whileHover={{scale:[1,0.9]}}
                transition={{duration:0.25}}
                className='app__flex'
                >
                <AiFillEye/>

                </motion.div>
              </a>

              <a href={work.videoLink} target="_blank" rel='noreferrer'>

                <motion.div
                whileInView={{scale:[0,1]}}
                whileHover={{scale:[1,0.9]}}
                transition={{duration:0.25}}
                className='app__flex'
                >
                <AiFillYoutube/>

                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel='noreferrer'>

                <motion.div
                whileInView={{scale:[0,1]}}
                whileHover={{scale:[1,0.9]}}
                transition={{duration:0.25}}
                className='app__flex'
                >
                <AiFillGithub/>

                </motion.div>
              </a>

            </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop:10}}>{work.description} </p>
              <p className='p-text' style={{marginTop:10}}> <span className='techstack'>Tech Stack :</span>{work.techstack} </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(
  
  MotionWrap(Work, 'app__works'),
    
    'work', 'app__primarybg'
    );