import { Route, Routes } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Screens */
import AboutScreen from './screens/AboutScreen';
import EpochTravelersScreen from './screens/EpochTravelersScreen';
import HomeScreen from './screens/HomeScreen';
import NoneyScreen from './screens/NoneyScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';

function Routing(): JSX.Element {
  const {
    textAbout,
    textEpochTravelers,
    textNoney
  } = config;

  return (
    <Routes>
      <Route path={textAbout} element={<AboutScreen />} />
      <Route path={textEpochTravelers.replace(' ', '-')} element={<EpochTravelersScreen />} />
      <Route path={textNoney} element={<NoneyScreen />} />
      <Route path="privacy-policy" element={<PrivacyPolicyScreen />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default Routing;
