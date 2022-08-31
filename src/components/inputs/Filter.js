
	import React, { Component } from 'react';


	export class Filter extends Component {

		state = { date : '', id : '' };

		dateChange = (e) => {

			this.setState({ date : e.target.value });

		}

		idChange = (e) => {

			this.setState({ id : e.target.value });

		}

		submit = (e) => {

			e.preventDefault();

			this.props.applyFilter( this.state );

		}

		reset = (e) => {

			e.preventDefault();

			this.setState({ date : '', id : '' });

		}

		render(){

			return(

				<>

					<h6 className="mx-2 mt-0 mb-3 text-muted">Filtrer La Recherche:</h6>

					<form className="row" onSubmit={ this.submit } >

						<div className="form-group mb-2 col-md-2">

							<input onChange={ this.dateChange } value={ this.state.date } className="form-control" type="date" />

						</div>

						<div className="form-group mb-2 col-md-2">

							<input onChange={ this.idChange } value={ this.state.id } className="form-control" type="text" placeholder="Fiche id..." />

						</div>

						<div className="form-group mb-2 col-md-2">

							<button className="w-100 btn btn-primary" type="submit">Filter</button>

						</div>

						<div className="form-group mb-2 col-md-2">

							<button onClick={ this.reset } className="w-100 btn btn-danger" type="button">Effacer</button>

						</div>

					</form>

				</>

			)

		}

	}

	export default Filter;