import { Route, Routes } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Interfaces */
import Galleries from '../interfaces/Galleries';
import Piece from '../interfaces/Piece';

/* Screens */
import AboutScreen from './screens/AboutScreen';
import EpochTravelersScreen from './screens/EpochTravelersScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import NoneyScreen from './screens/NoneyScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import PieceScreen from './screens/PieceScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import SunshineSunshineScreen from './screens/SunshineSunshineScreen';

/* Helpers */
import formatText from '../helpers/format-text';

function Routing(): JSX.Element {
  const {
    drawings,
    prints,
    posters,
    textAbout,
    textDrawings,
    textEpochTravelers,
    textNoney,
    textPosters,
    textPrints,
    textSunshineSunshine,
    textPrivacyPolicy
  } = config;

  const { formatDashCase } = formatText;

  function renderGalleryRoute(name: string) {
    return (
      <Route
        key={`${name}Route`}
        path={name}
        element={<GalleryScreen pieces={config[name as keyof Galleries]} />}
      />
    );
  }

  function renderPieceRoute(piece: Piece): JSX.Element {
    return (
      <Route
        key={`${piece.id}Route`}
        path={`${piece.category}s/${piece.path}`}
        element={<PieceScreen {...piece} />}
      />
    );
  }

  return (
    <Routes>
      {drawings.map(renderPieceRoute)}
      {prints.map(renderPieceRoute)}
      {posters.map(renderPieceRoute)}
      {[textDrawings, textPrints, textPosters].map(renderGalleryRoute)}
      <Route path={formatDashCase(textSunshineSunshine)} element={<SunshineSunshineScreen />} />
      <Route path={textAbout} element={<AboutScreen />} />
      <Route path={formatDashCase(textEpochTravelers)} element={<EpochTravelersScreen />} />
      <Route path={textNoney} element={<NoneyScreen />} />
      <Route path={formatDashCase(textPrivacyPolicy)} element={<PrivacyPolicyScreen />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default Routing;
