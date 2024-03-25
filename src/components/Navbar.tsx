import { NavLink } from 'react-router-dom';

/* Config */
import config from '../config.json';

function Navbar(): JSX.Element {
  const navLinkDefault: string = 'col mx-sm-1 px-3 d-flex flex-column justify-content-center text-center nav-link';

  function renderNavbarLink(name: string): JSX.Element {
    return (
      <NavLink
        key={`${name}NavLink`}
        className={
          ({ isActive }) => isActive ? navLinkDefault + ' nav-link-active' : navLinkDefault
        }
        to={`/${name}`}
      >
        {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
      </NavLink>
    );
  }

  return (
    <nav className="row mx-auto px-2">
      {config.navbarLinks.map(renderNavbarLink)}
    </nav>
  );
};

export default Navbar;
