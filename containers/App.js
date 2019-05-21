import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { images } from "../public/images";
import { Scroll } from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      searchField: ""
    };
  }

  componentDidMount() {
    this.setState({ images: images });
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { images, searchField } = this.state;
    const filteredAvengers = images.filter(image => {
      return (
        image.avenger.toLowerCase().includes(searchField.toLowerCase()) ||
        image.name.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    return !images.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <img
          className="pt2"
          src="https://fontmeme.com/permalink/190518/ac068f97191bc097a0ae3494c6ec34fe.png"
          alt="avengers-infinity-war-font"
          border="0"
        />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList images={filteredAvengers} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
