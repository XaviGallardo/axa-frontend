import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Default } from 'react-awesome-spinners';

import gnomeService from '../services/gnomeService';
import GnomeCardInfo from './GnomeCardInfo';
import Search from './Search';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brastlewark: [],
      searchGnomes: [],
    };
  }

  componentDidMount() {
    this.setState({
      Brastlewark: [...this.props.Brastlewark],
      searchGnomes: [...this.props.Brastlewark],
      isLoading: this.props.isLoading,
    });
    window.addEventListener('scroll', this.resizeHeaderOnScroll);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        Brastlewark: [...this.props.Brastlewark],
        searchGnomes: [...this.props.Brastlewark],
        isLoading: this.props.isLoading,
      });
    }
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById('logo');
    const searchbarEl = document.getElementById('searchbar');

    if (distanceY > shrinkOn) {
      headerEl.classList.add('smaller');
      searchbarEl && searchbarEl.classList.add('smaller');
    } else {
      headerEl.classList.remove('smaller');
      searchbarEl && searchbarEl.classList.remove('smaller');
    }
  }

  handleSearch = name => {
    const { Brastlewark } = this.state;

    const searchedGnomes = Brastlewark.filter(gnome => {
      return gnome.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });

    this.setState({ searchGnomes: [...searchedGnomes], searchName: name });
  };

  render() {
    const { isLoading, Brastlewark, searchGnomes } = this.state;

    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <div style={{ height: '130px' }} />
        {isLoading ? (
          <Default color="#FF0000" />
        ) : (
          <>
            {searchGnomes.map((gnome, index) => {
              return (
                <Link
                  to={`/gnome/${gnome.id}-${gnome.name.split(' ').join('-')}`}
                  key={`index-${index}`}
                >
                  <GnomeCardInfo index={index} gnome={gnome} />
                </Link>
              );
            })}
          </>
        )}
      </div>
    );
  }
}
Home.propTypes = {
  Brastlewark: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
