
	import React from 'react';

	import { BrowserRouter, Switch, Route } from 'react-router-dom';

/**
	*
	* Components
	*
*/
	import Header from './components/layouts/Header';


/**
	*
	* Routes
	*
*/
	import HomePage      from './routes/Home';

	import FormsPage     from './routes/Forms';
	import FormPage      from './routes/Form';

	import QuotesPage    from './routes/Quotes';
	import QuotePage     from './routes/Quote';

	import ContractsPage from './routes/Contracts';
	import ContractPage  from './routes/Contract';


	function App(){

		return(

			<>

				<BrowserRouter>

					<Header />

					<div className="container py-2">

						<Switch>

							<Route exact path="/" children={ <HomePage /> } />

						</Switch>

					</div>

				</BrowserRouter>

			</>

		);
	
	}

	export default App;

	/*


							<Route exact path="/Forms" children={ <FormsPage /> } />

							<Route exact path="/Form/:id" render={(props) => <FormPage {...props} />} />

							<Route exact path="/Quotes" children={ <QuotesPage /> } />

							<Route exact path="/Quote/:id" render={(props) => <QuotePage {...props} />} />

							<Route exact path="/Contracts" children={ <ContractsPage /> } />

							<Route exact path="/Contract/:id" render={(props) => <ContractPage {...props} />} />
							*/
