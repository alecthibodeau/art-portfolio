import { Link } from 'react-router-dom';

/* Config */
import config from '../../config.json';

/* Images */
import featureImage from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-07.jpg';

function HomeScreen() {
  return (
    <div>
      <Link to={`/${config.epochTravelersRoute}`}>
        <img className="mw-100" src={featureImage} alt="Detail from Alec Thibodeau's Epoch Travelers installation in marble" />
      </Link>
    </div>
  );
}

export default HomeScreen;
