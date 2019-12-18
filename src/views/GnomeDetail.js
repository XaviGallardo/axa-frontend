import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { convertColorToHex } from '../functions';
import GnomeCard from './ui/GnomeCard';
import GnomeName from './ui/GnomeName';
import GnomeCharacteristics from './ui/GnomeCharacteristics';
import GnomePicture from './ui/GnomePicture';
import GnomeInfo from './ui/GnomeInfo';
import GnomeProfessions from './ui/GnomeProfessions';

const GnomeDetail = ({ Brastlewark }) => {
  const { id } = useParams();
  console.log('TCL: GnomeDetail -> id', id);
  const gnome = Brastlewark[id];
  console.log('TCL: GnomeDetail -> gnome', gnome);
  return (
    <div>
      <div style={{ height: '80px' }} />
      <GnomeCard hairColor={convertColorToHex(gnome.hair_color)}>
        <GnomeName>{gnome.name}</GnomeName>
        <GnomePicture detailed hairColor={convertColorToHex(gnome.hair_color)}>
          <img
            // style={{ width: '25%', border: '1px solid black' }}
            src={gnome.thumbnail}
            alt="gnome"
          />
        </GnomePicture>
        <GnomeInfo detailed>
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
        {/* <h3>
          Hair Color:
          {gnome.hair_color}
        </h3> */}
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
        <h3>
          {gnome.friends.length > 0
            ? `Friends: 
          ${gnome.friends.length}`
            : null}
        </h3>
        <h3>
          {gnome.friends.length > 0 ? gnome.friends.join(' || ') : 'No FRIENDS'}
        </h3>
      </GnomeCard>
    </div>
  );
};

export default GnomeDetail;
