import { Route, Routes } from 'react-router-dom';

/* Config */
import config from '../config.json';

/* Components */
import About from './About';
import Gallery from './Gallery';
import Home from './Home';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/drawings" element={<Gallery category="drawings" squares={config.drawingsSquares} />} />
      <Route path="/posters" element={<Gallery category="posters" squares={config.drawingsSquares} />} />
      <Route path="/prints" element={<Gallery category="prints" squares={config.drawingsSquares} />} />
    </Routes>
  )
};

export default AllRoutes;
