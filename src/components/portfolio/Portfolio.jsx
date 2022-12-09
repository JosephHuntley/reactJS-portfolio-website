import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'HRIS',
		github: 'github.com',
		demo: 'github.com',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat cumque nostrum atque dolorum laboriosam!',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Memories',
		github: 'github.com',
		demo: 'github.com',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat cumque nostrum atque dolorum laboriosam!',
	},
	{
		id: 3,
		image: IMG3,
		title: 'Gym Exercises',
		github: 'https://github.com/JosephHuntley/gym_exercises',
		demo: 'https://youtube.com/playlist?list=PLGneXjfBUnOGLQfg-qrsUrOohGdqSmE1p',
		description:
			'A reponsive webpage that uses exerciseDB and Youtube Search from RapidAPI to show users popular exercises, and videos on how to preform them.',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Cocktail Nation',
		github: 'https://github.com/JosephHuntley/cocktailNation',
		demo: 'github.com',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat cumque nostrum atque dolorum laboriosam!',
	},
	{
		id: 5,
		image: IMG5,
		title: 'Angular',
		github: 'github.com',
		demo: 'github.com',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat cumque nostrum atque dolorum laboriosam!',
	},
	{
		id: 6,
		image: IMG6,
		title: 'Chat Application',
		github: 'https://github.com/JosephHuntley/chat_application',
		demo: 'https://youtu.be/MWFS30DgIio',
		description:
			'A fully responsive webpage built using React, Node, and Express JS. It uses the Stream Chat API to send messages between users.',
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo, description }) => {
					return (
						<article
							key={id}
							className='portfolio__item flip-card'>
							<div className='flip-card-inner'>
								<div className='flip-card-front'>
									<div className='card-body'>
										<div className='portfolio__item-image'>
											<img
												src={image}
												alt={title}
											/>
										</div>
										<h3 className='portfolio__title'>{title}</h3>
									</div>
								</div>
								<div className='flip-card-back card-body'>
									<h3 className='card-description'>{description}</h3>
									<div className='portfolio__item-cta'>
										<a
											href={github}
											className='btn'
											target='_blank'
											rel='noreferrer'>
											GitHub
										</a>
										<a
											href={demo}
											className='btn btn-primary'
											target='_blank'
											rel='noreferrer'>
											Demo
										</a>
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
