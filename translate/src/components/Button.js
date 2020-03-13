import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends Component {

  renderSubmit(language) {
    
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
            {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {

    return (
      <ColorContext.Consumer>
        { (color) => this.renderButton(color) }
      </ColorContext.Consumer>
    );
  };
}


export default Button;
