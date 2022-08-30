
	import React, { Component } from 'react';

	import { Link } from 'react-router-dom';

	export class Header extends Component {

		render(){

			return(

				<>

					<nav className="navbar p-3 navbar-dark bg-primary">

						<div className="container">

							<Link to="/" className="navbar-brand">Bienvenue Sur Zenith</Link>

						</div>

					</nav>

				</>

			)

		}

	}

	export default Header;