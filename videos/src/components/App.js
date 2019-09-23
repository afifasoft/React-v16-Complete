import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends Component {
  state = {
    videos: []
  };
  constructor(props) {
    super(props);

    this.onTermSubmit = this.onTermSubmit.bind(this);
  }

  async onTermSubmit(term) {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
