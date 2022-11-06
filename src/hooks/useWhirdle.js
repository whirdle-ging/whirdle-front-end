import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
// import solutions from '../data/db.json'

export const useWhirdle = solution => {
	const [turn, setTurn] = useState(0);
	const [guessWord, setGuessWord] = useState('');
	const [guessedWords, setGuessedWords] = useState([...Array(6)]); // each guess is an array
	const [history, setHistory] = useState([]); // each guess is a string
	const [isCorrect, setIsCorrect] = useState(false);
	const [usedKeys, setUsedKeys] = useState({}); // {a: 'grey', b: 'green', c: 'yellow'} etc-
	const [allWords, setAllWords] = useState([]);

	useEffect(
		() => {
			fetch('https://react-whirdle-api.herokuapp.com/words')
				.then(response => response.json())
				.then(data => {
					let sol = [];
					data.words.forEach(word => {
						sol += [word['word']];
					});
					setAllWords(sol);
				});
		},
		[setAllWords]
	);

	// format a guess into an array of letter objects
	// e.g. [{key: 'a', color: 'yellow'}]
	const formatGuess = () => {
		let solutionArray = [...solution];
		let formattedGuess = [...guessWord].map(l => {
			return { key: l, color: 'grey' };
		});

		// find any green letters
		formattedGuess.forEach((l, i) => {
			if (solution[i] === l.key) {
				formattedGuess[i].color = 'green';
				solutionArray[i] = null;
			}
		});

		// find any yellow letters
		formattedGuess.forEach((l, i) => {
			if (solutionArray.includes(l.key )) {
				formattedGuess[i].color = 'yellow';
				solutionArray[solutionArray.indexOf(l.key)] = null;
			}
		});

		return formattedGuess;
	};

	// checks if the current guess is an allowable word (e.g. not a junk word, a plural, etc)
	const addNewGuess = formattedGuess => {
		if (!allWords.includes(guessWord)) {
			alert('That is not an acceptable Whirdle word!');
			setGuessWord('');
			return;
		}
		// update the isCorrect state if the guess is correct
		if (guessWord === solution) {
			setIsCorrect(true);
			// return
		}
		// add the new guess to the guessedWords state where guessedWords are used to populate board
		setGuessedWords(prevGuessedWords => {
			let newGuessedWords = [...prevGuessedWords];
			newGuessedWords[turn] = formattedGuess;
			return newGuessedWords;
		});
		// adds word to array of words used
		setHistory(prevHistory => {
			return [...prevHistory, guessWord];
		});
		// add one to the turn state
		setTurn(prevTurn => {
			return prevTurn + 1;
		});
		// adds keys to usedKeys state and sets their color./
		setUsedKeys(prevUsedKeys => {
			formattedGuess.forEach(l => {
				const currentColor = prevUsedKeys[l.key];
				
				if (l.color === 'green') {
					prevUsedKeys[l.key] = 'green';
					return;
				}
				if (l.color === 'yellow' && currentColor !== 'green') {
					prevUsedKeys[l.key] = 'yellow';
					return;
				}
				if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
					prevUsedKeys[l.key] = 'grey';
					return;
				}
			});

			return prevUsedKeys;
		});
		setGuessWord('');
	};

	// keydown event - monitoring guesses already attempted, repeating a guess, guess length =  5,  & track current guess
	// if user presses enter, add the new guess
	const handleKeydown = ({ key }) => {
		if (key === 'Enter') {
			// checks to make sure user hasn't used up available gueeses; if so, game over modal appears
			if (turn > 5) {
				<Modal isCorrect={isCorrect} solution={solution} turn={turn} />;
				return;
			}
			// checks to see if word already used earlier; if so, alerts user and erases letters guessed
			if (history.includes(guessWord)) {
				alert('you already tried that word.');
				setGuessWord('');
				return;
			}
			// checks to see if guess is 5 letters; if not, alerts user and erases letters guessed
			if (guessWord.length !== 5) {
				window.alert('word must be 5 chars.');
				setGuessWord('');
				return;
			}
			const formatted = formatGuess();
			addNewGuess(formatted);
		}
		if (key === 'Backspace') {
			setGuessWord(prev => prev.slice(0, -1));
			return;
		}
		if (/^[A-Za-z]$/.test(key)) {
			if (guessWord.length < 5) {
				setGuessWord(prev => prev + key);
			}
		}
	};
	return { turn, guessWord, guessedWords, isCorrect, usedKeys, handleKeydown };
};

export default useWhirdle;
