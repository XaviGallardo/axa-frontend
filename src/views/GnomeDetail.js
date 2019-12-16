import React from 'react';
import { Link, useParams } from 'react-router-dom';

const GnomeDetail = ({ Brastlewark }) => {
  const { id } = useParams();
  const gnome = Brastlewark[id];
  console.log('TCL: GnomeDetail -> gnome', gnome);
  return (
    <div>
      <div>
        <img
          style={{ width: '25%', border: '1px solid black' }}
          src={gnome.thumbnail}
          alt="gnome"
        />
        <h3>{gnome.name}</h3>
        <h3>
          Age:
          {gnome.age}
        </h3>
        <h3>
          Weight:
          {gnome.weight}
        </h3>
        <h3>
          Height:
          {gnome.height}
        </h3>
        <h3>
          Hair Color:
          {gnome.hair_color}
        </h3>
        <h3>
          Professions:
          {gnome.professions.length}
        </h3>
        <h3>
          {gnome.professions.length > 0
            ? gnome.professions.join(' || ')
            : 'No Profession'}
        </h3>
        <h3>
          {gnome.friends.length > 0
            ? `Friends: 
          ${gnome.friends.length}`
            : null}
        </h3>
        <h3>
          {gnome.friends.length > 0 ? gnome.friends.join(' || ') : 'No FRIENDS'}
        </h3>
      </div>
    </div>
  );
};

export default GnomeDetail;
