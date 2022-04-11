import { Route, Routes } from 'react-router-dom';

/* Components */
import About from './About';
import Gallery from './Gallery';
import Home from './Home';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/drawings" element={<Gallery category="drawings" />} />
      <Route path="/posters" element={<Gallery category="posters"/>} />
      <Route path="/prints" element={<Gallery category="prints"/>} />
    </Routes>
  )
};

export default AllRoutes;
