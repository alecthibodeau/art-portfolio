import { Link } from 'react-router-dom';

/* Interfaces */
import GalleryDetail from '../interfaces/GalleryDetail';
import GalleryProps from '../interfaces/GalleryProps';

/* Helpers */
import { getDetailImage } from '../helpers/details';

function renderDetail(detail: GalleryDetail) {
  return (
    <Link
      key={detail.id}
      to={detail.path}
    >
      <img
        className="gallery-detail"
        src={getDetailImage(detail.id)}
        alt={detail.alt}
      />
    </Link>
  )
}

function Gallery(props: GalleryProps) {
  return (
    <div className="gallery-details-container">
      {props.details.map(renderDetail)}
    </div>
  );
}

export default Gallery;
