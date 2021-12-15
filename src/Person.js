import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Person = ({ people, indexCondition }) => {
	return (
		<>
			{people.map((person, index) => {
				const { image, name, title, quote } = person;
				return (
					<article key={index} className={indexCondition(index)}>
						<img src={image} alt={name} className='person-img' />
						<h4>{name}</h4>
						<p className='title'>{title}</p>
						<p className='text'>{quote}</p>
						<FaQuoteRight className='icon' />
					</article>
				);
			})}
		</>
	);
};

export default Person;
