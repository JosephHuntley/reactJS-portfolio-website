import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/joseph-huntley-187636196" target='blank' className=""><BsLinkedin/></a>
        <a href="https://github.com/JosephHuntley" target='blank' className=""><FaGithub /></a>
        
    </div>
  )
}

export default HeaderSocials