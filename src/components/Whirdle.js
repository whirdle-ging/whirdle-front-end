import React, { useEffect, useState } from 'react'
import { useWhirdle } from '../hooks/useWhirdle'
import Board from './Board'
import Keyboard from './Keyboard'
import Modal from './Modal'

export default function Whirdle({ solution }) {
	const {
		currentGuess,
		handleKeydown,
		guesses,
		isCorrect,
		turn,
		usedKeys
	} = useWhirdle(solution);
	const [showModal, setShowModal] = useState(false);

	useEffect( 
		() => {
			window.addEventListener('keydown', handleKeydown)
			// window.addEventListener('event' , () => {console.log('hello')});
			if (isCorrect || turn > 5) {
				setTimeout(() => setShowModal(true), 1000)
				window.removeEventListener('keydown', handleKeydown)
			}
		
			return () => {
				window.removeEventListener('keydown', handleKeydown)
			};
		},
		[handleKeydown, isCorrect, turn]
	);



	return <div>
			<Board currentGuess={currentGuess} guesses={guesses} turn={turn} />
			<Keyboard solution={solution} usedKeys={usedKeys} />
			{/* {isCorrect && setInterval(() => console.log('working...'), 5000)} */}
			{showModal && (<Modal isCorrect={isCorrect} solution={solution} turn={turn} />)}
		</div>;
}
