import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Clock from './Clock';

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


  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {

      return (
        <div>
          <Clock/>
          <SeasonDisplay lat={this.state.lat}/>
        </div>
      );
    //  return <div>Latitude: {this.state.lat}</div>;
    }
    return <Spinner message="Please accept location request"/>;
  }

// React says we have to define render!!
  render () {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
