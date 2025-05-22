import { Link } from 'react-router-dom';

/* Helpers */
import formatText from '../helpers/format-text';
import scrollToTop from '../helpers/scroll-to-top';

/* Styles */
import '../styles/footer.scss';

function Footer(): JSX.Element {
  const footerRoutes: string[] = ['privacy policy'];

  function renderFooterLink(routeName: string): JSX.Element {
    return (
      <Link
        key={`route${routeName}`}
        to={`/${formatText.formatDashCase(routeName)}`}
        onClick={scrollToTop}
      >
        {routeName}
      </Link>
    );
  }

  return (
    <footer>
      <div className="footer-bar">
        <div className="footer-information">
          <div className="footer-left">
            <div className="footer-copyright-text">
              &copy;{` Alec Thibodeau ${new Date().getFullYear()}`}
            </div>
          </div>
          <div className="footer-right">
            {footerRoutes.map(renderFooterLink)}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
