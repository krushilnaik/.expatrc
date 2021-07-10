import React, { useState } from 'react';

function SearchBar() {
	const [value, setValue] = useState('');

	return (
		<input
			type='text'
			name='search'
			id='search'
			placeholder='Search items:'
			defaultValue={value}
			onChange={({ target }) => setValue(target.value)}
		/>
	);
}

export default SearchBar;
