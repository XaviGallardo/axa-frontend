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

  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  input {
    background-color: white;
    border: 2px solid #ff0000;
    border-radius: 10px;
    padding: 1rem 0;
    margin-left: 0.5rem;
    font-size: 2rem;
    width: 80%;
    padding-left: 1rem;
  }
`;

class Search extends Component {
  handleSearchName = event => {
    const { handleSearch } = this.props;
    const { value } = event.target;
    handleSearch(value);
  };
  render() {
    return (
      <SearchBar id="searchbar">
        {/* <label>Search by Name:</label> */}
        <input
          type="text"
          name="name"
          placeholder="Search by Name"
          defaultValue=""
          onChange={this.handleSearchName}
        />
      </SearchBar>
    );
  }
}

export default Search;
