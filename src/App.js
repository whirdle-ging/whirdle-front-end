import { useEffect, useState } from 'react';
import Whirdle from './components/Whirdle';
import 'animate.css';

export default function App() {
	const [solution, setSolution] = useState("");

	// Generate a random word from the mongodb database
	useEffect(
		() => {
			fetch('http://localhost:5000/words')
				.then(res => res.json())
				.then(res => {
					setSolution(res.words[Math.floor(Math.random() * res.words.length)]['word']);
				})
				.catch(err => window.alert(err));
		},
		[setSolution]
	);

	return <div>
			<div className="whirdle">
				<h1 id="modal1" className="animate__animated__animate__rotateOut">
					W
				</h1>
				<h1 id="modal2" className="animate__animated__animate__rotateOut">
					H
				</h1>
				<h1 id="modal3" className="animate__animated__animate__rotateOut">
					I
				</h1>
				<h1 id="modal4" className="animate__animated__animate__rotateOut">
					R
				</h1>
				<h1 id="modal5" className="animate__animated__animate__rotateOut">
					D
				</h1>
				<h1 id="modal6" className="animate__animated__animate__rotateOut">
					L
				</h1>
				<h1 id="modal7" className="animate__animated__animate__rotateOut">
					E
				</h1>
			</div>
			{solution && <Whirdle solution={solution} />}
		</div>;
}
