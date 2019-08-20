import React from 'react';

class SearchBar extends React.Component {


  onInputChange(event) {
    event.preventDefault();
    console.log(event.target.value)
    console.log('search text');
  }

  onInputClick(event) {
    event.preventDefault();
    console.log('clicked');
    //  <input type="submit" onClick={this.onInputClick} />
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange}/>

          </div>
        </form>
      </div>
    );
  };

}

export default SearchBar;
