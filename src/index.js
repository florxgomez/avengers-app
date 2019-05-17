import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { images } from './images';


ReactDOM.render(<CardList images={images}/>
, document.getElementById('root'));
			
	

serviceWorker.unregister();
