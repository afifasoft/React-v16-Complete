import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>  

    </div>
    );
  }
}


export default App;
