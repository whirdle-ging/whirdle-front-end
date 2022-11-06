import React from 'react';

// components
import Row from './Row';

export default function Board({ guessedWords, guessWord, turn }) {
	return (
		<div>
			{guessedWords.map((g, i) => {
				if (turn === i) {
					return <Row key={i} guessWord={guessWord} />;
				}
				return <Row key={i} guess={g} />;
			})}
		</div>
	);
}
