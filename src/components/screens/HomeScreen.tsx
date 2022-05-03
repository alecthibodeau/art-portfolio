import { Link } from 'react-router-dom';

/* Config */
import config from '../../config.json';

/* Images */
import featureImage from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-07.jpg';

function HomeScreen() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link to={`/${config.epochTravelersRoute}`}>
        <div>
          <img
            className="mw-100"
            src={featureImage} alt="Detail from Alec Thibodeau's Epoch Travelers installation in marble"
          />
        </div>
      </Link>
      <div className="mt-3 home-caption">
        <Link to={`/${config.epochTravelersRoute}`}><span className="fst-italic">Epoch Travelers</span></Link> by Alec Thibodeau is a work in marble permanently installed at a site in New York City
      </div>
    </div>
  );
}

export default HomeScreen;
