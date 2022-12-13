import React from 'react';
import CTA from './CTA';
// import ME from '../../assets/me.png';
// import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h1 className='word'>
					<span className='char'>W</span>
					<span className='char'>E</span>
					<span className='char'>L</span>
					<span className='char'>C</span>
					<span className='char'>O</span>
					<span className='char'>M</span>
					<span className='char'>E</span>
				</h1>

				<h5>I'm</h5>
				<h1>Joseph Huntley</h1>
				<h5 className='text-light'>Fullstack Developer</h5>
				<CTA />

				{/*<HeaderSocials />

				<div className='me'>
					<img
						src={ME}
						alt=''
						className=''
					/>
				</div>

				<a
					href='#contact'
					className='scroll__down'>
					Scroll Down
				</a> */}
			</div>
		</header>
	);
};

export default Header;
