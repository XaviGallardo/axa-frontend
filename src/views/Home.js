import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ Brastlewark }) => {
  return (
    <div>
      {/* {console.log('TCL: Home -> Brastlewark', Brastlewark)} */}

      {Brastlewark.map((gnome, index) => {
        return (
          <div key={`index-${index}`}>
            <Link to={`/gnome/${gnome.id}`}>
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
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
