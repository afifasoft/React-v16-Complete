import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  constructor(props) {
    super(props);

    this.onTermSubmit = this.onTermSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
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
  };

  onVideoSelect(video) {

    console.log('From the App',video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.videos}/>

    </div>
    );
  }
}

export default App;
