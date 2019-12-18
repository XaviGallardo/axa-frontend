import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { convertColorToHex } from '../functions';
import GnomeCard from './ui/GnomeCard';
import GnomeName from './ui/GnomeName';
import GnomePicture from './ui/GnomePicture';
import GnomeInfo from './ui/GnomeInfo';

const GnomeCardFriend = ({ index, gnome }) => (
  <GnomeCard
    key={`index-${index}`}
    hairColor={convertColorToHex(gnome.hair_color)}
  >
    <GnomeName friend>{gnome.name}</GnomeName>
    <GnomeInfo friend>
      <GnomePicture hairColor={convertColorToHex(gnome.hair_color)}>
        <img
          // style={{ width: '25%', border: '1px solid black' }}
          src={gnome.thumbnail}
          alt="gnome"
        />
      </GnomePicture>
    </GnomeInfo>
  </GnomeCard>
);

GnomeCardFriend.propTypes = {
  index: PropTypes.number.isRequired,
  gnome: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    age: PropTypes.number,
    weight: PropTypes.number,
    height: PropTypes.number,
    hair_color: PropTypes.string,
    professions: PropTypes.array,
    friends: PropTypes.array,
  }).isRequired,
};

export default GnomeCardFriend;
