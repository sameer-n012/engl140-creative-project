import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {getJournals} from '../resources/getJournals.js';
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
                <h2 className='m-3 text-light'>Journal Entries</h2>
                {/* TODO : make title */}
				{journals && journals.length === 0 ? (
					<ErrorText text={'Sorry, there are no journals here.'} showButton={true} />
				) : !journals ? (
					<ErrorText text={'Sorry, there are no journals here.'} showButton={true} />
				) : (
					<Container fluid className='align-items-center p-0 d-flex flex-column'>
						<Container className='d-flex justify-content-evenly flex-column mt-2'>
							{journals.map((j) => (
								<Row key={j._id}>
									<Container className='bg-light text-dark blog-container mt-3 mb-3'>
										<Container className='d-flex align-items-center mt-3'>
											<h3 className='me-3 cursor-clickable' onClick={() => viewJournal(j._id)}>
												{j.title}
											</h3>
											<h3> | </h3>
											<p className='m-0 ms-3'>{j.date}</p>
										</Container>
										<hr />

										<p className='text-left'>{j.featuredBody + '...'}</p>
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
