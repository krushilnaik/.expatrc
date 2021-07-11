import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

import './scss/WelcomeScreen.scss';

function WelcomeScreen() {
	return (
		<section className='welcome'>
			<h1>Welcome to {<Logo />}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam. Eius minus
				voluptates non ab.
			</p>
			<Link to='/app' className='to-site'>
				open app
			</Link>
		</section>
	);
}

export default WelcomeScreen;
