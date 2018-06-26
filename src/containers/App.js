import React, { Component } from 'react';
import CardList from '../components/CardList';
// import robots from './robots';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: []
		};
		// console.log('constructor');
	}

	componentDidMount() {
		// this.setState({robots:robots});
		// console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return !robots.length ? //if( robots.length === 0 )
			<h1 className='tc f2'>Loading...</h1> :
			// console.log('render');
			(
				<div className='tc'>
					<h1 className='f2'>RoboFriends</h1>
					<SearchBox searchChange={ onSearchChange } />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




