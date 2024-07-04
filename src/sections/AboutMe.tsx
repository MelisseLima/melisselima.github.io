import React from 'react';
import data from '../data/en_us';
interface AboutMeProps {
  // Define any props you need for your component here
}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <section id="bio">
      <div id="info">
        <div style={{ textAlign: 'left' }}>
          <p>
            <strong>{data.nameLabel} :</strong>
          </p>
          <p>
            <strong>{data.phoneLabel} : </strong>
          </p>
          <p>
            <strong>{data.emailLabel} : </strong>
          </p>
        </div>
        <div>
          <p>{data.fullName}</p>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>

      <div id="presentation" style={{ paddingLeft: '2em' }}>
        <h1>{data.greatting}</h1>
        <p id="aboutMe" style={{ textAlign: 'justify' }}>
          {data.about}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
