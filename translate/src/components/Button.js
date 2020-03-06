import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import LanguageContext from '../contexts/LanguageContext';


class Button extends Component {
  static contextType = LanguageContext;  // contextType is a specific name must use same name for context

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return (
      <button className="ui button primary">{text}</button>
    );
  };
}


export default Button;
