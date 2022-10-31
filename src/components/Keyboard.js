import React, { useEffect, useState } from 'react'
// import { useWhirdle } from '../hooks/useWhirdle'

// component will create the on-screen keyboard
export default function Keyboard( { usedKeys, solution }) {
	// const { handleKeydown } = useWhirdle(solution)

	const [letters, setLetters] = useState(null)
	// const [currentGuess, setCurrentGuess] = useState(null)


	// pulls from the database and sets the letters state
	useEffect(() => {
		fetch('http://localhost:5000/letters')
			.then(res => res.json())
			.then(res => {
				setLetters(res.letters);
			})
			.catch(err => window.alert(err));
	}, [setLetters]
	)

	
	// creates and populates the game's on-screen keyboard
	// also connects the named key with usedKeys to determine its color 
	return (
		<div className="keyboard">
			{letters &&
				letters.map((l) => {
					const color=usedKeys[l.key]
					return (
						<div key={l.key} className={color}>
						{l.key.toUpperCase()}
					</div>
					)
				})}
		</div>
	)
}
