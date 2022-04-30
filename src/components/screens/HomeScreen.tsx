import { Link } from 'react-router-dom';

/* Config */
import config from '../../config.json';

/* Images */
import featureImage from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-07.jpg';

function HomeScreen() {
  return (
    <div>
      <Link to={`/${config.epochTravelersRoute}`}>
        <div>
          <img
            className="mw-100"
            src={featureImage} alt="Detail from Alec Thibodeau's Epoch Travelers installation in marble"
          />
        </div>
      </Link>
      <div className="mt-3 text-center">
          <span className="fst-italic">
            <Link to={`/${config.epochTravelersRoute}`}>
              Epoch Travelers
            </Link>
          </span>
          <span>
            : A permanent installation in marble at a site in New York City
          </span>
      </div>
    </div>
  );
}

export default HomeScreen;
