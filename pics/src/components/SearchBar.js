import React from 'react';

class SearchBar extends React.Component {


  state = {term: ''};

  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  // onInputChange(event) {
  //   event.preventDefault();
  //   console.log(event.target.value)
  //   console.log('search text');
  // }

  // onInputClick(event) {
  //   event.preventDefault();
  //   console.log('clicked');
  //   //  <input type="submit" onClick={this.onInputClick} />
  // }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term)   // when class based componet we will use this.props and onSubmit is props refernce from App.js
                          // when function based component we will use props
  //  console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form  onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term}  onChange={e => this.setState({ term: e.target.value})}/>
          </div>
        </form>
      </div>
    );
  };

}

export default SearchBar;
