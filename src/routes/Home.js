
	import React, { Component } from 'react';

/**
	*
	* Components
	* 
*/
	import Filter from '../components/inputs/Filter';

	import Form   from '../components/layouts/Form';


	export class HomePage extends Component {

		state = {

			forms: [

				{ id : 'f-1',  typeId : 1, typeName : 'auto',  date : '20-08-2022', show : true },

				{ id : 'f-2',  typeId : 2, typeName : 'moto',  date : '21-08-2022', show : true },

				{ id : 'f-3',  typeId : 3, typeName : 'santé', date : '22-08-2022', show : true },

				{ id : 'f-4',  typeId : 1, typeName : 'auto',  date : '30-08-2022', show : true },

				{ id : 'f-5',  typeId : 1, typeName : 'auto',  date : '30-08-2022', show : true },

				{ id : 'f-6',  typeId : 4, typeName : 'vie',   date : '30-08-2022', show : true },

				{ id : 'f-7',  typeId : 1, typeName : 'auto',  date : '30-08-2022', show : true },

				{ id : 'f-8',  typeId : 1, typeName : 'auto',  date : '31-08-2022', show : true },

				{ id : 'f-9',  typeId : 3, typeName : 'santé', date : '31-08-2022', show : true },

				{ id : 'f-10', typeId : 1, typeName : 'auto',  date : '31-08-2022', show : true },

				{ id : 'f-11', typeId : 1, typeName : 'auto',  date : '31-08-2022', show : true },

				{ id : 'f-12', typeId : 2, typeName : 'moto',  date : '31-08-2022', show : true },

			],

			formsAfterFilter : []

		}

		componentDidMount(){

			this.setState({ formsAfterFilter : this.state.forms });

		}

		convertDate = ( date ) => {

			return ( date != '' ) ? date.split( '-' ).reverse().join( '-' ) : '';

		}

		applyFilter = ( query ) => {

			let id   = query.id;

			let date = this.convertDate( query.date );

			let formsAfterFilter = this.state.forms.filter( function( data ){

					if( id == '' && date == '' ){

						return true;

					}else if( id != '' && data.id == id ){

						return true;

					}else if( date != '' && data.date == date ){

						return true;

					}
					
					return false;

				});

			this.setState({ formsAfterFilter : formsAfterFilter });

		}

		render(){

			let forms = this.state.formsAfterFilter;

			return(

				<>

					<Filter applyFilter={ this.applyFilter } />

					<div className="row mt-4">

						{ 

							forms.filter( ( data ) => data.show === true ).map( data => (

								<Form 

									key  = { data.id }

									data = { data }

								/>

							))

						}

					</div>

				</>

			)

		}

	}

	export default HomePage;