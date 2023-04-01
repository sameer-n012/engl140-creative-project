import './App.css';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Journal from './screens/Journal.js'
import JournalDetails from './screens/JournalDetails.js';
import About from './screens/About.js';
import NotFound from './screens/NotFound.js';
import { projectDetails } from './resources/projectDetails.js';

function App() {
	return (
		<div className='App bg-dark'>
			<BrowserRouter>
				<Header title={projectDetails.title} />
				<Routes>
					<Route path='/' element={<Home />} exact />
					<Route path='/home' element={<Home />} exact />
					<Route path='/about' element={<About />} exact />
					<Route path='/journals' element={<Journal />} exact />
					<Route path='/journals/:id' element={<JournalDetails />} exact />
					<Route path='*' element={<NotFound />} exact />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
