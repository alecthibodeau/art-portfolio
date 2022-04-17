import { NavLink } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Interfaces */
import NavbarLink from '../interfaces/NavbarLink';

const navLinkDefault: string = 'col mx-1 text-center nav-link';

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
    <nav className="row mx-auto px-1">
      {config.navbarLinks.map(renderNavbarLink)}
    </nav>
  );
};

export default Navbar;
