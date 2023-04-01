import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { projectDetails } from '../resources/projectDetails.js'

const Footer = () => {
    return (
		<Container
			style={{ color: 'white' }}
			className='footer bg-dark w-100 mw-100 d-flex m-0 p-4'
		>
			<Container className=' w-50 d-flex align-items-center'>
				<a
					className='footer-social-icon m=0 ms-2 me-2 not-link cursor-clickable'
					href={`mailto:${projectDetails.email}`}
					target='_blank'
					rel='noopener noreferrer'
					disabled={!projectDetails.email}
				>
					<FaEnvelope />
				</a>
                <a
					className='footer-social-icon m=0 ms-2 not-link cursor-clickable'
					href={projectDetails.projectGithub}
					target='_blank'
					rel='noopener noreferrer'
					disabled={!projectDetails.projectGithub}
				>
					<FaGithub />
				</a>

			</Container>
			<Container className='w-50 me-0 ms-0 float-right d-flex justify-content-end w-50'>
				<Container className='w-25 d-flex justify-content-end m-0 ms-auto footer-text'>
					Attribution:
				</Container>
				<Container className='w-25 d-flex flex-column m-0 align-items-start'>
					<a
						className='not-link cursor-clickable footer-text '
						href='https://fontawesome.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						FontAwesome
					</a>
                    <a
						className='not-link cursor-clickable footer-text '
						href='https://unsplash.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						Unsplash
					</a>
				</Container>
			</Container>
		</Container>
	);
}

export default Footer