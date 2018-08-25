import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';

import '../components/MainPage.css';

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
  }
  
  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

	render() {
		const { onSearchChange, isPending } = this.props;
    // OLD
    // const filteredRobots = robots.filter(robot => {
		// 	return robot.name.toLowerCase().includes(searchField.toLowerCase());
		// })

		return isPending ? //if( robots.length === 0 )
			<h1 className='tc f2'>Loading...</h1> :
			// console.log('render');
			(
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							{/* OLD => <CardList robots={filteredRobots} /> */}
							<CardList robots={this.filteredRobots()} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		
	}
}

export default MainPage;