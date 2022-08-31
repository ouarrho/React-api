
	import React, { Component } from 'react';

	import { Link } from 'react-router-dom';


	export class Form extends Component {

		render(){

			const { id, typeId, typeName, date } = this.props.data;

			return(

				<>

					<div className="col-md-4">

						<Link to={ '/Form/' + id } className="card p-4 mb-4 text-dark" style={{ textDecoration : 'none' }}>

							<div className="card-title text-muted h6">{ id }</div>
						
							<div className="card-top mt-2 overflow-hidden">

								<div className="h4" style={{ float: 'left' }}>{ typeName }</div>
								
								<div className="mt-2 text-success h6" style={{ float: 'right' }}>{ date }</div>

							</div>

							<div className="card-text mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
					
						</Link>

					</div>

				</>

			)

		}

	}

	export default Form;