import React from 'react'
import {BsGithub, BsMedium,BsYoutube,BsLinkedin} from "react-icons/bs";
const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div>
            <BsGithub/>
        </div>
        <div>
            <BsYoutube/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsMedium/>
        </div>
    </div>
  )
}

export default SocialMedia