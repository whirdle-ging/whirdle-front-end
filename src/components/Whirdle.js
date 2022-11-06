import React, { useEffect, useState } from 'react'
import { useWhirdle } from '../hooks/useWhirdle'
import Board from './Board'
import Keyboard from './Keyboard'
import Modal from './Modal'

export default function Whirdle({ solution }) {
	const {
		guessWord,
		handleKeydown,
		guessedWords,
		isCorrect,
		turn,
		usedKeys
	} = useWhirdle(solution);
	const [showModal, setShowModal] = useState(false);

	useEffect( 
		() => {
			window.addEventListener('keydown', handleKeydown)
			if (isCorrect || turn > 5) {
				setTimeout(() => setShowModal(true), 1750)
				window.removeEventListener('keydown', handleKeydown)
			}
			return () => {
				window.removeEventListener('keydown', handleKeydown)
			};
		},
		[handleKeydown, isCorrect, turn]
	);

	return <div>
			<Board guessWord={guessWord} guessedWords={guessedWords} turn={turn} />
			<Keyboard solution={solution} usedKeys={usedKeys} />
			{showModal && (<Modal isCorrect={isCorrect} solution={solution} turn={turn} />)}
		</div>
}
