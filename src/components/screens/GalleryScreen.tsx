import { Link } from 'react-router-dom';

/* Interfaces */
import GalleryProps from '../../interfaces/GalleryProps';
import Piece from '../../interfaces/Piece';

/* Helpers */
import { getDetailImage } from '../../helpers/details';

function renderDetail(piece: Piece) {
  return (
    <Link
      key={piece.id}
      className="m-3"
      to={piece.path}
    >
      <img
        className="gallery-image"
        src={getDetailImage(piece.id)}
        alt={`Detail of ${piece.title} ${piece.category} by Alec Thibodeau`}
      />
    </Link>
  )
}

function GalleryScreen(props: GalleryProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center gallery-images-container">
      {props.pieces.map(renderDetail)}
    </div>
  );
}

export default GalleryScreen;
