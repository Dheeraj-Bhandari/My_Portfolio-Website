import React from 'react'
import {BsGithub, BsMedium,BsYoutube,BsLinkedin} from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div>
           <a href="https://github.com/Dheeraj-Bhandari" target={'_blank'} rel="noreferrer"> <BsGithub/></a>
        </div>
        <div>
            <a href="https://www.youtube.com/channel/UChXHt9pHik0rR0iZDOHNdsg" target={'_blank'} rel="noreferrer"><BsYoutube/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/digitaldk/" target={'_blank'} rel="noreferrer"><BsLinkedin/></a>
        </div>
        <div>
            <a href="https://digitaldk-in.medium.com/" target={'_blank'} rel="noreferrer"><BsMedium/></a>
        </div>
    </div>
  )
}

export default SocialMedia