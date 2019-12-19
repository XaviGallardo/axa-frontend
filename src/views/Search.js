import React, { Component } from 'react';

class Search extends Component {
  handleSearchName = event => {
    const { handleSearch } = this.props;

    handleSearch(event.target.value);
  };
  render() {
    return (
      <div>
        <label>Search by Name:</label>
        <input
          type="text"
          name="name"
          defaultValue=""
          onChange={e => this.handleSearchName(e)}
        />
      </div>
    );
  }
}

export default Search;
