import { NavLink, useLocation } from 'react-router-dom';

/* Config */
import config from '../config.json';

const navLinkDefault: string = 'col mx-1 text-center nav-link';

// const usePathname = () => {
//   const location = useLocation();
//   return location.pathname;
// }

function renderNavbarLink(name: string) {
  return (
    <NavLink
      key={`${name}NavLink`}
      className={
        ({ isActive }) => isActive ?
        // navLinkDefault + ' nav-link-active' + (useLocation().pathname === `/${name}` ? ' gallery' : '') :
        navLinkDefault + ' nav-link-active' :

        navLinkDefault
      }
      to={`/${name}`}
    >
      {name}
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
