import { Link } from 'react-router-dom';

/* Helpers */
import scrollToTop from '../../helpers/scroll-to-top';

/* Config */
import config from '../../config.json';

/* Images */
import { epochTravelersImages } from '../../helpers/images-general';

function HomeScreen(): JSX.Element {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link to={`/${config.epochTravelersRoute}`} onClick={scrollToTop}>
        <div>
          <img
            className="mw-100"
            src={epochTravelersImages[6]} alt="Detail from Alec Thibodeau's Epoch Travelers installation in marble"
          />
        </div>
      </Link>
      <div className="mt-3 home-caption">
        <Link to={`/${config.epochTravelersRoute}`} onClick={scrollToTop}><span className="fst-italic">Epoch Travelers</span></Link> by artist Alec Thibodeau is a large-scale work in marble permanently installed at an interior site in New York City.
      </div>
    </div>
  );
}

export default HomeScreen;
