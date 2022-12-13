import React, { useEffect, useState } from 'react';
import './portfolio.css';
import { fetchData } from '../../utils/fetchData';

const Portfolio = () => {
	const [project, setProject] = useState([]);

	useEffect(() => {
		const PROJECT_ID = 'f8h23esy';
		const DATASET = 'production';

		const QUERY = encodeURIComponent('*[_type=="projects"]');

		const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

		const fetchProjectData = async () => {
			const projectData = await fetchData(URL);
			const { result } = projectData;

			setProject([...result]);
		};

		fetchProjectData();
	}, []);

	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio__container'>
				{project?.map(({ name, github, demo, description, image }) => {
					return (
						<article
							key={name}
							className='portfolio__item flip-card'>
							<div className='flip-card-inner'>
								<div className='flip-card-front'>
									<div className='card-body'>
										<div className='portfolio__item-image'>
											<img
												src={image}
												alt={name}
											/>
										</div>
										<h3 className='portfolio__title'>{name}</h3>
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
