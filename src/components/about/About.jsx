import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { SlHourglass } from 'react-icons/sl';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5 className=''>Get to know</h5>
			<h2>About me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img
							src={ME}
							alt='Head shot'
						/>
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>3+ Years</small>
						</article>
						<article className='about__card'>
							<SlHourglass className='about__icon' />
							<h5>Hours Coding</h5>
							<small>300+ Hours</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>80+ Completed Projects</small>
						</article>
					</div>

					<p>
						A Front End Developer with over three years of experience.
						Experience with HTML, CSS, JavaScript and various front end
						technologies like ReactJS, Redux, NextJS, TypeScript, and design
						frameworks such as Material UI, Bootstrap, and tailwind.
						<br />
						<br />I have built several web applications using Rest APIs and
						Single Page Applications (SPA) Architecture. I have some experience
						building full stack applications using the popular tech stack MERN
						and backend technologies like NodeJS, ExpressJS, Java Spring Boot,
						ASP.DOTNET, and both SQL database like MySQL, Postgres and No-SQL
						like MongoDB.
					</p>

					<a
						href='#contact'
						className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
