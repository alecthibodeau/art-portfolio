import { Link } from 'react-router-dom';

/* Constants */
import navigationLinks from '../../constants/navigation-links';

/* Helpers */
import scrollToTop from '../../helpers/scroll-to-top';

/* Images */
import { epochTravelersImages } from '../../helpers/images-general';

function HomeScreen(): JSX.Element {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link
        to={`/${navigationLinks.urlEpochTravelers}`}
        onClick={scrollToTop}
      >
        <div>
          <img
            className="mw-100"
            src={epochTravelersImages[6]} alt="Detail from Alec Thibodeau's Epoch Travelers installation in marble"
          />
        </div>
      </Link>
      <div className="mt-3 home-caption">
        <Link
          to={`/${navigationLinks.urlEpochTravelers}`}
          onClick={scrollToTop}><span className="fst-italic">Epoch Travelers</span>
        </Link> by artist Alec Thibodeau is a large-scale work in marble permanently installed at an interior site in New York City.
      </div>
    </div>
  );
}

export default HomeScreen;
