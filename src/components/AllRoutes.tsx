import { Route, Routes } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Components */
import AboutScreen from './screens/AboutScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import PieceScreen from './screens/PieceScreen';

/* Interfaces */
import Piece from '../interfaces/Piece';

function renderPieceRoute(piece: Piece) {
  return (
    <Route key={`${piece.id}Route`} path={`/${piece.category}s/${piece.path}`} element={<PieceScreen {...piece} />} />
  )
}

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />

      <Route
        path="/about"
        element={<AboutScreen />}
      />
      <Route
        path="/drawings"
        element={<GalleryScreen pieces={config.drawings} />}
      />
      <Route
        path="/posters"
        element={<GalleryScreen pieces={config.posters} />}
      />
      <Route
        path="/prints"
        element={<GalleryScreen pieces={config.prints} />}
      />

      {config.drawings.map(renderPieceRoute)}
      {config.posters.map(renderPieceRoute)}

      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
};

export default AllRoutes;
