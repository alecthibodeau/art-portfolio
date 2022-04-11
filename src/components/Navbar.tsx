import { NavLink } from 'react-router-dom';

import config from '../config.json';
import NavbarLink from '../interfaces/NavbarLink';

const defaultNavLink: string = 'nav-link';

function renderNavLinks(link: NavbarLink) {
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
      {config.navLinks.map(renderNavLinks)}
    </nav>
  );
};

export default Navbar;
