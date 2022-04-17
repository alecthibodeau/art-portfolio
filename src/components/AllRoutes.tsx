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
      <Route path="/drawings/ahem" element={<Piece {...config.drawings.ahem} />} />
      <Route path="/drawings/basil" element={<Piece {...config.drawings.basil} />} />
      <Route path="/drawings/basking-with-the-stars" element={<Piece {...config.drawings.baskingWithTheStars} />} />
      <Route path="/drawings/clarice" element={<Piece {...config.drawings.clarice} />} />
      <Route path="/drawings/conversion" element={<Piece {...config.drawings.conversion} />} />
      <Route path="/drawings/distraction" element={<Piece {...config.drawings.distraction} />} />
      <Route path="/drawings/do-you-have-a-moment" element={<Piece {...config.drawings.doYouHaveAMoment} />} />
      <Route path="/drawings/friendships-path" element={<Piece {...config.drawings.friendshipsPath} />} />
      <Route path="/drawings/grackle" element={<Piece {...config.drawings.grackle} />} />
      <Route path="/drawings/infinity-with-you" element={<Piece {...config.drawings.infinityWithYou} />} />
      <Route path="/drawings/involuntary-investment" element={<Piece {...config.drawings.involuntaryInvestment} />} />
      <Route path="/drawings/jubilance" element={<Piece {...config.drawings.jubilance} />} />
      <Route path="/drawings/mirage-bash" element={<Piece {...config.drawings.mirageBash} />} />
      <Route path="/drawings/ms-sock" element={<Piece {...config.drawings.msSock} />} />
      <Route path="/drawings/nemo" element={<Piece {...config.drawings.nemo} />} />
      <Route path="/drawings/no-one-likes-a-twit" element={<Piece {...config.drawings.noOneLikesATwit} />} />
      <Route path="/drawings/peregrine-falcon" element={<Piece {...config.drawings.peregrineFalcon} />} />
      <Route path="/drawings/postcard-to-william-schaff" element={<Piece {...config.drawings.postcardToWilliamSchaff} />} />
      <Route path="/drawings/quimby" element={<Piece {...config.drawings.quimby} />} />
      <Route path="/drawings/sons-and-daughters" element={<Piece {...config.drawings.sonsAndDaughters} />} />
      <Route path="/drawings/swan-and-anchor" element={<Piece {...config.drawings.swanAndAnchor} />} />
      <Route path="/drawings/temporary-chemical-factory" element={<Piece {...config.drawings.temporaryChemicalFactory} />} />
      <Route path="/drawings/trust" element={<Piece {...config.drawings.trust} />} />
      <Route path="/drawings/zeke" element={<Piece {...config.drawings.zeke} />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default AllRoutes;
