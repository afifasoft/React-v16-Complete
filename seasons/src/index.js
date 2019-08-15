import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  //
  // }

  state = {lat: null, errorMessage: ''};
  // Only one time this life cycle method is called
  componentDidMount() {
    console.log('My component was rendered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({lat: position.coords.latitude});

      },
      (err) => {
        console.log(err)
        this.setState({ errorMessage: err.message });

      }
    );

}

  // this method is called when the setState() is called
  componentDidUpdate() {
    console.log('My componet was just updated -it rerendered!');
  }


// React says we have to define render!!
  render () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {

      return <SeasonDisplay lat={this.state.lat}/>
    //  return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
