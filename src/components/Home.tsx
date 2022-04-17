/* Images */
import featureImage from '../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-07.jpg';

function Home() {
  return (
    <div className="mt-2 mx-3 d-flex flex-column align-items-center">
      <img className="feature-image" src={featureImage} alt="Detail from Alec Thibodeau's Epoch Travelers" />
    </div>
  );
}

export default Home;
