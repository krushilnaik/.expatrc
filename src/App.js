import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ExpatRC from './pages/ExpatRC';
import NotFound from './pages/NotFound';
import WelcomeScreen from './pages/WelcomeScreen';

import './App.css';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/welcome' />
					</Route>
					<Route exact path='/welcome' children={<WelcomeScreen />} />
					<Route exact path='/app' children={<ExpatRC />} />
					<Route path='/*' children={<NotFound />} />
				</Switch>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
