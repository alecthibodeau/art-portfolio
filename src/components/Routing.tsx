import { Route, Routes } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Interfaces */
import Galleries from '../interfaces/Galleries';
import Piece from '../interfaces/Piece';

/* Screens */
import AboutScreen from './screens/AboutScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import PieceScreen from './screens/PieceScreen';

function renderGalleryRoute(name: string) {
  return (
    <Route
      key={`${name}Route`}
      path={`/${name}`}
      element={<GalleryScreen pieces={config[name as keyof Galleries]} />}
    />
  )
}

function renderPieceRoute(piece: Piece) {
  return (
    <Route
      key={`${piece.id}Route`}
      path={`/${piece.category}s/${piece.path}`}
      element={<PieceScreen {...piece} />}
    />
  )
}

function Routing() {
  return (
    <Routes>
      {config.navbarLinks.slice(0, -1).map(renderGalleryRoute)}
      {config.drawings.map(renderPieceRoute)}
      {config.prints.map(renderPieceRoute)}
      {config.posters.map(renderPieceRoute)}
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
};

export default Routing;
