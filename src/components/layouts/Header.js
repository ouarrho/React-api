
	import React, { Component } from 'react';

	import { Link } from 'react-router-dom';

	export class Header extends Component {

		state = {

			host : 'http://192.168.3.15:8080/api/fiche'

		}

		hostChange = (e) => {

			this.setState({ host : e.target.value });

		}

		render(){

			return(

				<>

					<nav 

						className="navbar fixed-top p-3 navbar-light shadow-sm" 

						style={{ 

							'backgroundColor' : 'rgb(255, 255, 255, .7)',

							'backdropFilter' : 'saturate(180%) blur(20px)' 

						}}

					>

						<div className="container">

							<div className="form-group row">

								<Link to="/" className="col-sm-5 col-form-label text-primary h5 text-center">Zénith Assurances</Link>

								<div className="col-sm-7">

									<input onChange={ this.hostChange } className="form-control" type="text" value={ this.state.host } placeholder="https://..." />
					
								</div>
								
							</div>

							<Link to="/Form/Create" className="w-auto px-4 btn btn-success" type="submit">Nouvelle Fiche</Link>

						</div>

					</nav>

				</>

			)

		}

	}

	export default Header;