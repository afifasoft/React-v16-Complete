import React, { Component } from 'react';

const Context =  React.createContext('english'); // Capital C - this is very important

// this is name export so we will use { LanguageStore } while importing
export class LanguageStore extends Component {
  state = { language : 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;
