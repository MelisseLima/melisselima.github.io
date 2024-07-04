import React from 'react';

interface ProfileProps {
  name: string;
  title: string;
  imageSrc: string;
}

const Profile: React.FC<ProfileProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="container">
      <img className="photo_profile noselectble" src={imageSrc} alt="Profile" />
      <h1 className="noselectble">{name}</h1>
      <p className="second-text noselectble">{title}</p>
    </div>
  );
};

export default Profile;
