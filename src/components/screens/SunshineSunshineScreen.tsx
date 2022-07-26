/* Images */
import { sunshineSunshineImages } from '../../helpers/images-general';

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
        {sunshineSunshineImages.map(renderImage)}
      </div>
    </div>
  );
}

export default SunshineSunshineScreen;
