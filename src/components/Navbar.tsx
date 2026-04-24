import { NavLink } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Styles */
import '../styles/nav.css';

function Navbar(): JSX.Element {
  const navLinkDefault: string = 'navigation-link';
  const navbarLinks: string[] = [
    config.textEpochTravelers,
    config.textNoney,
    config.textAbout
  ];

  function capitalizeWords(text: string) {
    return text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function renderNavbarLink(name: string): JSX.Element {
    return (
      <NavLink
        key={`${name}NavLink`}
        className={
          ({ isActive }) => isActive ? navLinkDefault + ' nav-link-active' : navLinkDefault
        }
        to={`/${name.replace(' ', '-')}`}
      >
        {capitalizeWords(name)}
      </NavLink>
    );
  }

  return (
    <nav>
      {navbarLinks.map(renderNavbarLink)}
    </nav>
  );
};

export default Navbar;
