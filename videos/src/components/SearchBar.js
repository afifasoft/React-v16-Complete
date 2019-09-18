import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term : '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }



  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term); 
  }

  render() {

    return (
        <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
                 />
            </div>
          </form>

        </div>
    );

  }

}

export default SearchBar;
