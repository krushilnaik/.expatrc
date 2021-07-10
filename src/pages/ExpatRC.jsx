import React from 'react';
import Briefing from '../components/Briefing';
import NavBar from '../components/NavBar';
import Table from '../components/Table';

function ExpatRC() {
	return (
		<>
			<NavBar />
			<section className='expatrc'>
				<Table />
				<Briefing />
			</section>
		</>
	);
}

export default ExpatRC;
