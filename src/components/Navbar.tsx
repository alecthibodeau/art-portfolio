import { NavLink } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Interfaces */
import NavbarLink from '../interfaces/NavbarLink';

const navLinkDefault: string = 'mx-1 nav-link';

function renderNavbarLink(link: NavbarLink) {
  return (
    <NavLink
      key={link.id}
      className={
        ({ isActive }) => (isActive ? navLinkDefault + " nav-link-active" : navLinkDefault)
      }
      to={link.path}
    >
      {link.category}
    </NavLink>
  )
}

function Navbar() {
  return (
    <nav className="d-flex justify-content-center">
      {config.navbarLinks.map(renderNavbarLink)}
    </nav>
  );
};

export default Navbar;
