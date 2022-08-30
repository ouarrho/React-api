
	import React, { Component } from 'react';

	import { Link } from 'react-router-dom';


	export class Card extends Component {

		render(){

			return(

				<>

					<div className="col-md-4">

						<div className="card p-4 mb-4">
						
							<div className="card-title h4">Lorem ipsum</div>

							<div className="card-text mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
					
						</div>

					</div>

				</>

			)

		}

	}

	export default Card;