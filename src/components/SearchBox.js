import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--light-blue bg-lightest-blue' 
				type="search" 
				placeholder="search rotobs" 
				onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;

