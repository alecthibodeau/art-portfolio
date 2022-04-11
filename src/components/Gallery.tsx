import { Link } from 'react-router-dom';

/* Helpers */
import { getDrawingsSquareByKey } from '../helpers/helpers';

/* Interfaces */
import GallerySquare from '../interfaces/GallerySquare';
import GalleryProps from '../interfaces/GalleryProps';

function renderSquare(square: GallerySquare) {
  return (
    <Link
      key={square.id}
      to={square.path}
    >
      <img
        className="gallery-square"
        src={getDrawingsSquareByKey(square.id)}
        alt={square.alt}
      />
    </Link>
  )
}

function Gallery(props: GalleryProps) {
  return (
    <div className="gallery-squares-container">
      {props.squares.map(renderSquare)}
    </div>
  );
}

export default Gallery;
