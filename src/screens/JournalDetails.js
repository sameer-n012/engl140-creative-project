import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { getJournalById } from '../resources/getJournals.js';
import ErrorText from '../components/ErrorText.js';
import ReactMarkdown from 'react-markdown';

const JournalDetails = () => {
	const navigate = useNavigate();

	const journal = getJournalById(useParams()['id']);
	console.log(journal);

	const [journalBody, setJournalBody] = useState('');

	const fetchText = fetch(require(`../resources/journals/${journal.filename}`))
		.then((r) => r.text())
		.then((text) => {
			return text;
		});

	useEffect(() => {
		const getText = async () => {
			const text = await fetchText;
			setJournalBody(text);
		};

		getText();
	}, [fetchText]);

	//console.log('a', getText());
	return (
		<>
			<Container className='main'>
				{!journal ? (
					<ErrorText text={'Sorry, this journal does not exist.'} showButton={true} />
				) : (
					<Container fluid className='mt-5 mb-5 d-flex flex-column align-items-center'>
						<Container className='text-light m-2 mb-4'>
							<Button variant='outline-light' onClick={() => navigate(-1)} className='btn'>
								Back
							</Button>
						</Container>
						<Container className='journal-entry-bg-div pt-5 pb-5'>
							<Container
								style={{ borderBottom: '2px solid black' }}
								className='text-dark ms-4 pb-2 ps-5 pe-5 m-2 w-90 align-items-center'
							>
								<Container className='d-flex align-items-center'>
									<h1 className='me-3'>{journal.title}</h1>
									<h2> | </h2>
									<p className='m-0 ms-3 semibold-text'>{journal.date}</p>
								</Container>
							</Container>
							<Container
								className='text-dark mt-4 ms-4 w-90 ps-5 pe-5'
								style={{ lineHeight: '2.5' }}
							>
								<ReactMarkdown
									disallowedElements={['h1', 'h2']}
									linkTarget={'_blank'}
									className='journal-body-text semibold-text'
								>
									{journalBody ? journalBody : ''}
								</ReactMarkdown>
							</Container>
						</Container>
					</Container>
				)}
			</Container>
		</>
	);
};

export default JournalDetails;
