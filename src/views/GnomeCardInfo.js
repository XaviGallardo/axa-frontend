import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { convertColorToHex } from '../functions';
import GnomeCard from './ui/GnomeCard';
import GnomeName from './ui/GnomeName';
import GnomePicture from './ui/GnomePicture';
import GnomeInfo from './ui/GnomeInfo';
import GnomeCharacteristics from './ui/GnomeCharacteristics';
import GnomeProfessions from './ui/GnomeProfessions';

const GnomeCardInfo = ({ index, gnome }) => (
  <GnomeCard
    key={`index-${index}`}
    hairColor={convertColorToHex(gnome.hair_color)}
  >
    <GnomeName>{gnome.name}</GnomeName>
    <GnomeInfo>
      <GnomePicture hairColor={convertColorToHex(gnome.hair_color)}>
        <img
          // style={{ width: '25%', border: '1px solid black' }}
          src={gnome.thumbnail}
          alt="gnome"
        />
      </GnomePicture>
      <GnomeCharacteristics>
        <span className="text">Age</span>
        <span className="data">{gnome.age}</span>
      </GnomeCharacteristics>
      <GnomeCharacteristics>
        <span className="text">Weight</span>
        <span className="data">{Math.round(gnome.weight * 100) / 100}</span>
      </GnomeCharacteristics>
      <GnomeCharacteristics>
        <span className="text">Height</span>
        <span className="data">{Math.round(gnome.height * 100) / 100}</span>
      </GnomeCharacteristics>
    </GnomeInfo>
    {/* <p>
                Hair Color:
                {gnome.hair_color}
              </p> */}
    <GnomeProfessions>
      <p>
        {gnome.professions.length > 0
          ? `Professions: 
                  ${gnome.professions.length}`
          : null}
      </p>

      <p className="professions-list">
        {gnome.professions.length > 0
          ? gnome.professions.join(' & ')
          : 'No Profession'}
      </p>
    </GnomeProfessions>
  </GnomeCard>
);

GnomeCardInfo.propTypes = {
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

export default GnomeCardInfo;
