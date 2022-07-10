/* Images */
import sunshineSunshineImage01 from '../../assets/images/work/site-specific/thibodeau-site-specific-sunshine-sunshine-01.jpg';
import sunshineSunshineImage02 from '../../assets/images/work/site-specific/thibodeau-site-specific-sunshine-sunshine-02.jpg';
import sunshineSunshineImage03 from '../../assets/images/work/site-specific/thibodeau-site-specific-sunshine-sunshine-03.jpg';
import sunshineSunshineImage04 from '../../assets/images/work/site-specific/thibodeau-site-specific-sunshine-sunshine-04.jpg';
import sunshineSunshineImage05 from '../../assets/images/work/site-specific/thibodeau-site-specific-sunshine-sunshine-05.jpg';
import sunshineSunshineImage06 from '../../assets/images/work/site-specific/thibodeau-site-specific-sunshine-sunshine-06.jpg';

const images = [
  sunshineSunshineImage01,
  sunshineSunshineImage02,
  sunshineSunshineImage03,
  sunshineSunshineImage04,
  sunshineSunshineImage05,
  sunshineSunshineImage06
]

function renderImage(path: string, index: number) {
  return (
    <img
      key={`sunshineSunshineDetail${index + 1}`}
      className="m-4 mw-100 sunshine-sunshine-image"
      src={path}
      alt={`Detail #${index + 1} from Alec Thibodeau's Sunshine Sunshine mural painting`}
    />
  )
}

function SunshineSunshineScreen() {
  return (
    <div>
      <div className="text-center">
        <span className="fst-italic">Sunshine Sunshine</span> by artist Alec Thibodeau is a mural he painted on an interior wall at a <a href="https://like-no-udder.com">vegan ice cream shop</a>.
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {images.map(renderImage)}
      </div>
    </div>
  );
}

export default SunshineSunshineScreen;
