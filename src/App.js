import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { images } from './images';
import { Scroll } from './Scroll';

class App extends Component {
	constructor(){
		super();
		this.state = {
			images: [],
			searchField: ''
		}
	}

	componentDidMount(){
		this.setState({ images : images });
	}

	onSearchChange = (e) => {
		this.setState({searchField : e.target.value});
	}
	render(){
		const filteredAvengers = this.state.images.filter(image => {
			return (
				image.avenger.toLowerCase().includes(this.state.searchField.toLowerCase()) 
				|| image.name.toLowerCase().includes(this.state.searchField.toLowerCase())
				);	
		});
		if(this.state.images.length === 0){
			return <h1>Loading...</h1>
		} else {
			return (
				<div className='tc'>
				<img className='pt2' src="https://fontmeme.com/permalink/190518/ac068f97191bc097a0ae3494c6ec34fe.png" alt="avengers-infinity-war-font" border="0"/>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList images={filteredAvengers}/>
				</Scroll>
				</div>
			);
		}
	}
}

export default App;