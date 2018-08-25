import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
		
		shouldComponentUpdate() {
			return false;
		}

    render() {
			return (
				<div>
					<h1 className='f2'>RoboFriends</h1>
					<CounterButton color={'red'} />
				</div>
			);
    }    
} 

export default Header;