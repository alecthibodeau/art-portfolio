import { NavLink } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Styles */
import '../styles/nav.css';

/* Helpers */
import formatText from '../helpers/format-text';

function Navbar(): JSX.Element {
  const {
    textAbout,
    textDrawings,
    textPosters,
    textPrints
  } = config;

  const {
    formatDashCase,
    formatTitleCase,
    formatTitleCaseMultipleWords
  } = formatText;

  const navLinkDefault: string = 'navigation-link';
  const navbarLinks: string[] = [
    textDrawings,
    textPrints,
    textPosters,
    textAbout
  ];

  function renderNavbarLink(name: string): JSX.Element {
    return (
      <NavLink
        key={`${name}NavLink`}
        className={
          ({ isActive }) => isActive ? navLinkDefault + ' nav-link-active' : navLinkDefault
        }
        to={`/${formatDashCase(name)}`}
      >
        {name.includes(' ') ? formatTitleCaseMultipleWords(name) : formatTitleCase(name)}
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
