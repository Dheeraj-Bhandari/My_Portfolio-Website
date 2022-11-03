import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {/* {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <img src={work.company} alt="" />
                      <p className="p-text">{work.company}</p>
                      
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} */}
          {/* Masai School Exp */}
          <motion.div
            className="app__skills-exp-item"

          >
            <div className="app__skills-exp-year">
              <img style={{ width: '100px', marginTop: '10px' }} src='https://learn.masaischool.com/img/logo_big.png' alt="" />

              <p className="bold-text">2022-2023</p>
            </div>
            <motion.div className="app__skills-exp-works">

              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                data-for='masai'
                // key={work.name}
                >
                  <h4 className="bold-text">MERN Development(APPRENTICESHIP)</h4>
                  {/* <p className="p-text">Amazon</p> */}
                  <ul style={{ marginTop: '10px' }}>
                    <li>1200+ Hours Practical Coding</li>
                    <li>80+ Mini Projects</li>
                    <li>300+ Hours Data Structure & Alogrithms</li>
                    <li>100+ Hours Soft Skill Development</li>
                    <li>10+ Projects &  Hackathons</li>
                  </ul>
                </motion.div>
                <ReactTooltip
                  id='masai'
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {/* {work.desc} */}
             Completed More then 35 Weeks Professional Web Development Training From India's Leading Platform. Created Mutliple Project Throughout this time with the calloboration of other team Members
                </ReactTooltip>
              </>

            </motion.div>
          </motion.div>

          {/* Amazon Exp */}
          <motion.div
            className="app__skills-exp-item"

          >
            <div className="app__skills-exp-year">
              <img style={{ width: '100px', marginTop: '10px' }} src='https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png' alt="" />

              <p className="bold-text">2020-2022</p>
            </div>
            <motion.div className="app__skills-exp-works">

              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for='amazon'
                // data-for={work.name}
                // key={work.name}
                >
                  <h4 className="bold-text">Data Assocaite</h4>
                  {/* <p className="p-text">Amazon</p> */}
                  <ul style={{ marginTop: '10px' }}>
                    <li>Delivery of Tasks in accordance with set quality standards.</li>
                    <li>Ensure data privacy of Customers.</li>
                    <li>Good listening skills through the process in order to achieve metrics</li>
                  </ul>
                </motion.div>
                <ReactTooltip
                  // id={work.name}
                  id='amazon'
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {/* {work.desc} */}
                  Responsible for listing commands of the user and logging them into a system in an accurate manner
                </ReactTooltip>
              </>

            </motion.div>
          </motion.div>



        </div>
      </div>
    </>
  );
};

export default AppWrap(

  MotionWrap(Skills, 'app__skills'),

  'skills', 'app__whitebg'
);