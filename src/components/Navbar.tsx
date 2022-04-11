import { NavLink } from 'react-router-dom';

import config from '../config.json';
import NavbarLink from '../interfaces/NavbarLink';

const defaultNavLink: string = 'nav-link';

function renderNavbarLink(link: NavbarLink) {
  return (
    <NavLink
      key={link.id}
      className={
        ({ isActive }) => (isActive ? defaultNavLink + " active-link" : defaultNavLink)
      }
      to={link.path}
    >
      {link.category}
    </NavLink>
  )
}

function Navbar() {
  return (
    <nav className="navbar">
      {config.navbarLinks.map(renderNavbarLink)}
    </nav>
  );
};

export default Navbar;
