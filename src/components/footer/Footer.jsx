import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
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
				<a href='facebook.com'>
					<FaFacebookF />
				</a>
				<a href='Instagram.com'>
					<FiInstagram />
				</a>
				<a href='Twitter.com'>
					<IoLogoTwitter />
				</a>
				<a href='Linkedin.com'>
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
