import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';



class App extends Component {

  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language: language});
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
          <i className="flag ae" onClick={() => this.onLanguageChange('arabic')}/>
        </div>
        {this.state.language}
      </div>
    );
  }
}


export default App;
