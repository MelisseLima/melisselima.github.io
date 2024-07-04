import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

interface ServicesProps {
  // Define the props for your component here
}

const Services: React.FC<ServicesProps> = () => {
  // Implement your component logic here

  return (
    <section id="services">
      <h2 style={{ color: 'whitesmoke' }}>Services</h2>
      <div className="card-group centred container-services">
        <div className="box1">
          <PublicIcon className="material-icons noselectble bigicon" />
          <h2 className="serviceTitle">Web Design</h2>
          <p className="describe-service">
            Advertising and presentation web pages for companies.
          </p>
        </div>
        <div className="box1">
          <ColorLensIcon className="material-icons noselectble bigicon" />
          <h2>Branding</h2>
          <p className="describe-service">Creation and renewal of logos.</p>
        </div>
        <div className="box1">
          <CodeIcon className="material-icons noselectble bigicon" />
          <h2>Web Developer</h2>
          <p className="describe-service">
            Software development for various business areas.
          </p>
        </div>
        <div className="box1">
          <LocalPhoneIcon className="material-icons noselectble bigicon" />
          <h2>Support</h2>
          <p className="describe-service">Product Support and Maintenance.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
