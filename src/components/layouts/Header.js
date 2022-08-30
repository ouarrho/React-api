
	import React, { Component } from 'react';

	import { Link } from 'react-router-dom';

	export class Header extends Component {

		render(){

			return(

				<>

					<nav className="navbar navbar-expand-sm navbar-dark bg-primary">

						<div className="container">

							<Link to="/" className="navbar-brand">Bienvenue Sur Zenith</Link>

							<div className="navbar-brand">

								<ul className="navbar-nav h6">

									<li className="nav-item active">

										<Link to="/Forms" className="nav-link text-light">Fiches</Link>

									</li>

									<li className="nav-item">

										<Link to="/Quotes" className="nav-link text-light">Devis</Link>

									</li>

									<li className="nav-item">

										<Link to="/Contracts" className="nav-link text-light">Contrats</Link>

									</li>

								</ul>

							</div>

						</div>

					</nav>

				</>

			)

		}

	}

	export default Header;