import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { projectDetails } from '../resources/projectDetails.js';
import ErrorText from '../components/ErrorText.js';
import { useState, useEffect } from 'react';

const About = () => {
	const [aboutBody, setAboutBody] = useState('');

	const fetchText = fetch(require(`../resources/journals/about.md`))
		.then((r) => r.text())
		.then((text) => {
			return text;
		});

	useEffect(() => {
		const getText = async () => {
			const text = await fetchText;
			setAboutBody(text);
		};

		getText();
	}, [fetchText]);

	return (
		<Container className='main'>
			{!projectDetails ? (
				<ErrorText showButton={true} />
			) : (
				<Container className='m-2 text-light d-flex mt-5 mb-5'>
					<Col
						className='text-light w-50 d-flex flex-column justify-content-center align-items-start'
						style={{ lineHeight: '2.5' }}
					>
						<h2>About This Project</h2>
						<p>
							&emsp;&emsp;&emsp;
							{aboutBody}
						</p>
					</Col>
					<Col className='w-50 d-flex justify-content-center text-align-start'>
						<img
							className='about-img'
							alt='Cover of The Plague by Albert Camus'
							src={require(`../resources/images/book-cover.png`)}
						></img>
					</Col>
				</Container>
			)}
		</Container>
	);
};

export default About;
