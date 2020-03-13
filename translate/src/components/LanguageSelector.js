import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    
    return (
      <div>
        Select a language
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
        <i className="flag ae" onClick={() => this.context.onLanguageChange('dutch')}/>
      </div>
    )
  }
}

export default LanguageSelector;
