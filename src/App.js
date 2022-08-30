
	import React from 'react';

	import { BrowserRouter, Switch, Route } from 'react-router-dom';

	import Header from './components/layouts/Header';

	import HomePage from './routes/Home';

	function App(){

		return(

			<>

				<BrowserRouter>

					<Header />

					<div className="container py-2">

						<Switch>
							
							<Route exact path="/" children={ <HomePage /> } />
							
							<Route exact path="/Forms" children={ <HomePage /> } />
							
							<Route exact path="/Quotes" children={ <HomePage /> } />
							
							<Route exact path="/Contracts" children={ <HomePage /> } />

						</Switch>

					</div>

				</BrowserRouter>

			</>

		);
	
	}

	export default App;
