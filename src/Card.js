import React from 'react';

const Card = (props) => {
	return (
		<div className ='bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='' src={props.src} height='300' width='200'/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.id}</p>
			</div>
		</div>
		);
}

export default Card;
