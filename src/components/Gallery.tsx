import { Link } from 'react-router-dom';

/* Interfaces */
import GallerySquare from '../interfaces/GallerySquare';
import GalleryProps from '../interfaces/GalleryProps';

/* Helpers */
import { getSquareImage } from '../helpers/squares';

function renderSquare(square: GallerySquare) {
  return (
    <Link
      key={square.id}
      to={square.path}
    >
      <img
        className="gallery-square"
        src={getSquareImage(square.id)}
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
