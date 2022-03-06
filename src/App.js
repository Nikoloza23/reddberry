import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
import SubmitPage from './pages/submitpage/SubmitPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/firstPage" element={<Page1 />} />
				<Route path="/secondPage" element={<Page2 />} />
				<Route path="/thirdPage" element={<Page3 />} />
				<Route path="/fourthPage" element={<Page4 />} />
				<Route path="/submitPage" element={<SubmitPage />} />
			</Routes>
		</div>
	);
}

export default App;
