import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ title }) => {
	return (
		<Container className='header m-0 p-0 w-100 mw-100 d-flex flex-row text-align-center'>
			<Navbar className='w-100 p-4' bg='dark' variant='dark' expand='sm'>
				<Container className='d-flex justify-content-spread'>
					<LinkContainer to='/'>
						<Navbar.Brand>{title}</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end flex-grow-0'>
						<Nav className='me-auto'>
							<LinkContainer to='/journals'>
								<Nav.Link>Journal</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/about'>
								<Nav.Link>About</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default Header;
