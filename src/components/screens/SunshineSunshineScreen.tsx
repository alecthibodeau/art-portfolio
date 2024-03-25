/* Images */
import { sunshineSunshineImages } from '../../helpers/images-general';

function SunshineSunshineScreen(): JSX.Element {
  const shopLink: string = 'https://like-no-udder.com';

  function renderImage(path: string, index: number): JSX.Element {
    return (
      <img
        key={`sunshineSunshineDetail${index + 1}`}
        className="m-4 mw-100 sunshine-sunshine-image"
        src={path}
        alt={`Detail #${index + 1} from Alec Thibodeau's Sunshine Sunshine mural painting`}
      />
    );
  }

  return (
    <div>
      <div className="text-center">
        <span className="fst-italic">Sunshine Sunshine</span> is a mural in water-based paint by
        Alec Thibodeau. It's on an interior wall at a <a href={shopLink}>vegan ice cream shop</a> in
        Providence, Rhode Island.
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {sunshineSunshineImages.map(renderImage)}
      </div>
    </div>
  );
}

export default SunshineSunshineScreen;
