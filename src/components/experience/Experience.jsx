import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import skills from './skills.json';

const { frontend, backend } = skills;

const experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Frontend Development</h3>
					<div className='experience__content'>
						{frontend.map(({ skill, level }) => {
							return (
								<article
									className='experience__details'
									key={skill}>
									<BsPatchCheckFill className='experience__details-icons' />
									<div>
										<h4>{skill}</h4>
										<small className='text-light'>{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
				{/*END OF FRONTEND*/}
				<div className='experience__backend'>
					<h3>Backend Development</h3>
					<div className='experience__content'>
						{backend.map(({ skill, level }) => {
							return (
								<article
									className='experience__details'
									key={skill}>
									<BsPatchCheckFill className='experience__details-icons' />
									<div>
										<h4>{skill}</h4>
										<small className='text-light'>{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default experience;
