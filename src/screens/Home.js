import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Container className='main home-bg-img-div w-100'>
				<div className='d-flex align-items-center justify-content-center w-100 h-100'>
					<Button
						variant='outline-light'
						onClick={() => navigate('/journals')}
						className='ms-auto me-auto btn home-journals-btn'
					>
						View Journals
					</Button>
				</div>
			</Container>
		</>
	);
};

export default Home;
