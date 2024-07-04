import React from 'react';

interface Option {
  name: string;
  link: string;
  imageSrc: string;
}

interface NavbarProps {
  options: Option[];
}

const NavbarSocial: React.FC<NavbarProps> = ({ options }) => {
  return (
    <ul className="ul-social noselectble">
      {options.map((option, index) => (
        <li className="li-social grow" key={index}>
          <a target="_blank" href={option.link}>
            <img src={option.imageSrc} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarSocial;
