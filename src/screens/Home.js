import React from 'react';
import { Container, Button } from 'react-bootstrap';
import ErrorText from '../components/ErrorText.js';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

	return (
		<>
			<Container className='main'>
				<div className='home-bg-img-div d-flex align-items-center justify-content-center w-100 m-5'>
					<Button variant='outline-light' onClick={() => navigate('/journals')} className='ms-auto me-auto btn'>
						See Journals
					</Button>
				</div>
			</Container>
		</>
	);
};

export default Home;
