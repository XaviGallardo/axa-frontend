import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Img from 'react-image';
import { Default } from 'react-awesome-spinners';
import { convertColorToHex, getName } from '../functions';
import GnomeCard from './ui/GnomeCard';
import GnomeName from './ui/GnomeName';
import GnomeCharacteristics from './ui/GnomeCharacteristics';
import GnomePicture from './ui/GnomePicture';
import GnomeInfo from './ui/GnomeInfo';
import GnomeProfessions from './ui/GnomeProfessions';
import GnomeCardInfo from './GnomeCardInfo';
import Friends from './ui/Friends';
import GnomeCardFriend from './GnomeCardFriend';

const GnomeDetail = ({ Brastlewark }) => {
  const { urlName } = useParams();
  const gnomeName = getName(urlName);

  const gnome = Brastlewark.find(gnome => gnome.name === gnomeName);

  return (
    <>
      <div style={{ height: '65px' }} />
      <GnomeCard hairColor={convertColorToHex(gnome.hair_color)}>
        <GnomeName>{gnome.name}</GnomeName>
        <GnomePicture detailed hairColor={convertColorToHex(gnome.hair_color)}>
          <Img
            // style={{ width: '25%', border: '1px solid black' }}
            src={gnome.thumbnail}
            loader={<Default color="#FF0000" />}
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
              ? `${gnome.professions.length} Professions`
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
            ? `${gnome.friends.length} Friends`
            : `Sorry, No Friends!!`}
        </h3>

        <Friends>
          {gnome.friends.map((gnomeFriendName, index) => {
            const gnomeFriend = Brastlewark.find(
              gnome => gnome.name === gnomeFriendName,
            );
            return (
              <Link
                to={`/gnome/${gnomeFriend.id}-${gnomeFriend.name
                  .split(' ')
                  .join('-')}`}
                key={`index-${index}`}
              >
                <GnomeCardFriend index={index} gnome={gnomeFriend} />
              </Link>
            );
          })}
        </Friends>
      </GnomeCard>
    </>
  );
};

export default GnomeDetail;
