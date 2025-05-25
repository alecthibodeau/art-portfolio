import { Link } from 'react-router-dom';

/* Helpers */
import scrollToTop from '../../helpers/scroll-to-top';

/* Config */
import config from '../../config.json';

/* Interfaces */
import GalleryProps from '../../interfaces/GalleryProps';
import Piece from '../../interfaces/Piece';

/* Helpers */
import { getDetailImage } from '../../helpers/images-gallery-details';

function GalleryScreen(props: GalleryProps): JSX.Element {

  function renderDetail(piece: Piece): JSX.Element {
    return (
      <Link
        key={`${piece.id}Detail`}
        className="m-3"
        to={piece.path}
        onClick={scrollToTop}
      >
        <img
          className="gallery-image"
          src={getDetailImage(piece.id)}
          alt={`Detail of ${piece.title} ${piece.category} ${config.artistCredit}`}
        />
      </Link>
    );
  }

  return (
    <div className="d-flex flex-wrap justify-content-center gallery-images-container">
      {props.pieces.map(renderDetail)}
    </div>
  );
}

export default GalleryScreen;
