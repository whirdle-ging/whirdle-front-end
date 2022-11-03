import React, { useState, useEffect } from 'react';

const Pause = (delay) => {
	// Set the initial count to 0
	const [count, setCount] = useState(0);
	useEffect(() => {
		// increment the count by 1
		const countTimer = setInterval(() => {
			setCount(prevCount => prevCount + 1);
			// every delay milliseconds
		}, delay);
		// and clear this timer when the component is unmounted
		return function cleanup() {
			clearInterval(countTimer);
		};
	});

	return (
       console.log(count)
	);
};

export default Pause;
