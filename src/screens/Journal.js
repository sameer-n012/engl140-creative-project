import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getJournals } from '../resources/getJournals.js';
import ErrorText from '../components/ErrorText.js';

const Journal = () => {
	const navigate = useNavigate();

	const journals = getJournals();

	const viewJournal = (id) => {
		navigate(`/journals/${id}`);
	};

	return (
		<>
			<Container className='main flex-column pb-3 pt-3'>
				<h2 className='m-3 text-light'>Raymond Rambert's Journal Entries</h2>
				{journals && journals.length === 0 ? (
					<ErrorText text={'Sorry, there are no journals here.'} showButton={true} />
				) : !journals ? (
					<ErrorText text={'Sorry, there are no journals here.'} showButton={true} />
				) : (
					<Container fluid className='align-items-center p-0 d-flex flex-column'>
						<Container className='d-flex justify-content-evenly flex-column mt-2'>
							{journals.map((j) => (
								<Row key={j._id}>
									<Container
										className='bg-light rounded text-dark blog-container mt-3 mb-3 cursor-clickable'
										onClick={() => viewJournal(j._id)}
									>
										<Container className='d-flex align-items-center mt-3 mb-3'>
											<h3
												className='m-0 me-3'
											>
												{j._id + 1} : {j.title}
											</h3>
											<h3 className='m-0'> | </h3>
											<p className='m-0 ms-3'>{j.date}</p>
										</Container>
										{/* <hr />

										<p className='text-left'>{j.featuredBody + '...'}</p> */}
									</Container>
								</Row>
							))}
						</Container>
					</Container>
				)}
			</Container>
		</>
	);
};

export default Journal;
