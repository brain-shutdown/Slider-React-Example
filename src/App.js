import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import Person from './Person';
import data from './data';

function App() {
	const [people] = useState(data);
	const [currentIndex, setCurrentIndex] = useState(0);
	const previousIndex = (currentIndex - 1 + people.length) % people.length;
	const nextIndex = (currentIndex + 1) % people.length;

	const indexCondition = (id) => {
		if (id === previousIndex) return 'lastSlide';
		if (id === currentIndex) return 'activeSlide';
		return 'nextSlide';
	};

	useEffect(() => {
		let timeout = setTimeout(() => {
			setCurrentIndex(nextIndex);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [nextIndex]);

	return (
		<main className='section'>
			<header className='title'>
				<h2>
					<span>/</span>Reviews
				</h2>
			</header>
			<section className='section-center'>
				<Person people={people} indexCondition={indexCondition} />
				<button className='prev' onClick={() => setCurrentIndex(previousIndex)}>
					<FiChevronLeft />
				</button>
				<button className='next' onClick={() => setCurrentIndex(nextIndex)}>
					<FiChevronRight />
				</button>
			</section>
		</main>
	);
}

export default App;
