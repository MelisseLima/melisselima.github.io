import React from 'react';

interface Option {
  name: string;
  link: string;
}

interface NavbarProps {
  options: Option[];
}

const Navbar: React.FC<NavbarProps> = ({ options }) => {
  return (
    <nav>
      <ul className="nav ul noselectble">
        {options.map((option, index) => (
          <li className="li-social grow" key={index}>
            <a className="nav-link" href={option.link}>
              {option.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
