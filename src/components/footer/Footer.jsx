import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<a
				href='/#'
				className='footer__logo'>
				JH
			</a>

			<ul className='permalinks'>
				<li>
					<a href='/#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a href='https://github.com/JosephHuntley'>
					<FaGithubSquare />
				</a>
				<a href='https://Linkedin.com/in/joseph-huntley-187636196/'>
					<BsLinkedin />
				</a>
			</div>
			<div className='footer__copyright'>
				<small>&copy; Joseph Huntley. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
