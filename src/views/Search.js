import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
  margin-top: 8rem;
  font-size: 2rem;
  position: fixed;
  left: 0px;
  right: 0px;
  background-color: white;
  color: red;
  padding-bottom: 1rem;
  input {
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 1rem 0;
    margin-left: 0.5rem;
    font-size: 2rem;
  }
`;

class Search extends Component {
  handleSearchName = event => {
    const { handleSearch } = this.props;

    handleSearch(event.target.value);
  };
  render() {
    return (
      <SearchBar>
        <label>Search by Name:</label>
        <input
          type="text"
          name="name"
          defaultValue=""
          onChange={e => this.handleSearchName(e)}
        />
      </SearchBar>
    );
  }
}

export default Search;
