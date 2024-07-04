import React from 'react';

import { Navbar, NavbarSocial, Profile } from '../components';

import data from '../data/en_us';

const HeaderProfile: React.FC = () => {
  // Implement your component logic here

  return (
    <header className="App-header">
      <Navbar options={data.options} />
      <Profile
        name={data.name}
        title={data.title}
        imageSrc="./../../Profile.jpg"
      />

      <NavbarSocial options={data.social} />
    </header>
  );
};

export default HeaderProfile;
