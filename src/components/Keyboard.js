import React, { useEffect, useState } from 'react'


// component will create the on-screen keyboard
export default function Keyboard( { usedKeys, solution, isCorrect }) {
	// const { handleKeydown } = useWhirdle(solution)

	const [letters, setLetters] = useState(null)

	// pulls from the database and sets the letters state
	useEffect(() => {
		fetch('https://react-whirdle-api.herokuapp.com/letters')
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
		<>
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
		</>
	)
}