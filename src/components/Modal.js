import React from 'react';
import 'animate.css';

 // Modal when solved whirdle - gives solution and number of turns taken
export default function Modal({ isCorrect, solution, turn }) {

	// Execute a function when the user presses a key on the keyboard
	window.addEventListener('keydown', function(event) {
		// If the user presses the "Enter" key on the keyboard
		if (event.key === 'Enter') {
			window.location.reload();
		}
	});

	return (
	<div className="modal">
			{isCorrect && (
				<div>
					<h1 id="modal">YOU WON YOUR</h1>
					<div className="whirdle">
					<h1 id="modal1" className="animate__animated__animate__rotateOut">W</h1>
					<h1 id="modal2" className="animate__animated__animate__rotateOut">H</h1>
					<h1 id="modal3" className="animate__animated__animate__rotateOut">I</h1>
					<h1 id="modal4" className="animate__animated__animate__rotateOut">R</h1>
					<h1 id="modal5" className="animate__animated__animate__rotateOut">D</h1>
					<h1 id="modal6" className="animate__animated__animate__rotateOut">L</h1>
					<h1 id="modal7" className="animate__animated__animate__rotateOut">E</h1>
					</div>
			
				<h1 id="modal">MATCH!!!</h1>
				<p id="modal" className="solution">You solved it! The solution was <span>{solution}</span>.</p>
				{turn === 1 ? <div className="solution-line">You found the solution after {turn} guess.</div> : <div className="solution-line">You found the solution after {turn} guesses.</div>}
				<button className="modal-button" onClick={() => window.location.reload()}>Play Again</button>
				</div>)} 

			/* Modal when failed whirdle - gives solution, number of turns taken */
			{!isCorrect && (
				<div>
					<h1 id="modal-over">GAME OVER</h1>
					<h1 id="modal">I AM SORRY. YOU RAN OUT OF TURNS.</h1>
					<div className="whirdle">
						<p id="modal" className="solution">The solution was <span>{solution}</span>.</p>
						<p id="modal" className="solution">Better luck next time :)</p>
					</div>
					<button className="modal-button" id="myBtn" onClick={() => window.location.reload()}>Play Again</button>
				</div>)}
				</div>
	)
}
