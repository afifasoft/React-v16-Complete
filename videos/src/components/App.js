import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends Component {
  constructor(props) {
    super(props);
    this.onTermSubmit = this.onTermSubmit.bind(this);
  }

  onTermSubmit(term) {
    console.log(term);
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;
