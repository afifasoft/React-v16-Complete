import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

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
          <i className="flag ae" onClick={() => this.onLanguageChange('dutch')}/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        <LanguageContext.Provider value="dutch">
          <UserCreate />
        </LanguageContext.Provider>
        <UserCreate />
    </div>
    );
  }
}


export default App;
