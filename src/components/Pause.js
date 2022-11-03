import React, { useState, useEffect } from 'react';

function Pause() {
	const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
	useTimeout(() => {
		setHasTimeElapsed(true);
	}, 5000);
	return (
		<p>
			{hasTimeElapsed ? '5 seconds has passed!' : 'The timer is running…'}
		</p>
	);
}

export default Pause;