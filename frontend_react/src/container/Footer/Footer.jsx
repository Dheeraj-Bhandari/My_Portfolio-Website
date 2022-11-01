import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (username === '' || email === '' || message === '') {
      toast.warn("Please fill all details!");
    }
    else {
      setLoading(true);

      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };

      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));

        toast.success("Message Sent");
    }

  };

  return (
    <>
      <h2 className="head-text">Take a chai☕ & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:digitaldk.in@gmail.com" className="p-text">digitaldk.in@gmail.com</a>
        </div>

      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" required placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" required placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thanks! I will get back to You Soon👨‍💻
          </h3>
        </div>
      )}
      <div className='footer-Credit'>
        <p className="p-text" style={{ 'text-transform': 'uppercase' }}>Designed & Developed with <span className='hearticon'>❤</span> by <a className='footercreditname' href='https://www.linkedin.com/in/digitaldk/' target={'_blank'} rel="noreferrer"> Dheeraj Bhandari </a> </p>
        <p className="p-text allright-reserved" > @2023 ALL RIGHTS RESERVED</p>
      </div>
      <ToastContainer />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);