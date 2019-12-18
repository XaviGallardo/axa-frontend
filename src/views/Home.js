import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GnomeCardInfo from './GnomeCardInfo';

const Home = ({ Brastlewark }) => {
  return (
    <div>
      {/* {console.log('TCL: Home -> Brastlewark', Brastlewark)} */}
      <div style={{ height: '65px' }} />
      {Brastlewark.map((gnome, index) => {
        return (
          <Link
            to={`/gnome/${gnome.id}-${gnome.name.split(' ').join('-')}`}
            key={`index-${index}`}
          >
            <GnomeCardInfo index={index} gnome={gnome} />
          </Link>
        );
      })}
    </div>
  );
};

Home.propTypes = {
  Brastlewark: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
