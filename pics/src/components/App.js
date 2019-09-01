import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {images: []};

  constructor(props) {
    super(props);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
// 94
  async onSearchSubmit(term) {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
         Authorization: 'Client-ID ac0797ec2b357b441ec458b9fadbc841ffce80f90b53ba437db9a93ad5fe6558'
      }
    });

    this.setState({ images: response.data.results });

  }

  render() {
    return (
        <div className="ui container" style={{ marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
      </div>


    );
  }

}

export default App;
