import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { images } from './images'

ReactDOM.render(
			<div>
				<Card id={images[0].id} name={images[0].name} src={images[0].src} />
				<Card id={images[1].id} name={images[1].name} src={images[1].src} />
				<Card id={images[2].id} name={images[2].name} src={images[2].src} />
				<Card id={images[3].id} name={images[3].name} src={images[3].src} />
				<Card id={images[4].id} name={images[4].name} src={images[4].src} />
				<Card id={images[5].id} name={images[5].name} src={images[5].src} />
				<Card id={images[6].id} name={images[6].name} src={images[6].src} />
				<Card id={images[7].id} name={images[7].name} src={images[7].src} />
				<Card id={images[8].id} name={images[8].name} src={images[8].src} />
				<Card id={images[9].id} name={images[9].name} src={images[9].src} />
				<Card id={images[10].id} name={images[10].name} src={images[10].src} />
				<Card id={images[11].id} name={images[11].name} src={images[11].src} />
				<Card id={images[12].id} name={images[12].name} src={images[12].src} />
				<Card id={images[13].id} name={images[13].name} src={images[13].src} />
				<Card id={images[14].id} name={images[14].name} src={images[14].src} />
				<Card id={images[15].id} name={images[15].name} src={images[15].src} />
			</div>
, document.getElementById('root'));
			
	

serviceWorker.unregister();
