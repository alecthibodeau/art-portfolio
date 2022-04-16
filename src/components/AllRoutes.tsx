import { Route, Routes } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Components */
import About from './About';
import Gallery from './Gallery';
import Home from './Home';
import Piece from './Piece';
import NotFound from './NotFound';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/drawings" element={<Gallery category="drawings" details={config.drawingsDetails} />} />
      <Route path="/posters" element={<Gallery category="posters" details={config.postersDetails} />} />
      <Route path="/prints" element={<Gallery category="prints" details={config.printsDetails} />} />
      <Route path="/drawings/aerodynamics-tribute" element={<Piece {...config.drawings.aerodynamicsTribute} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default AllRoutes;
