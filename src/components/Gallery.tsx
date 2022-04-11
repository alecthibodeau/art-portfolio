/* Interfaces */
import GalleryProps from '../interfaces/GalleryProps';

function Gallery(props: GalleryProps) {
  return (
    <div>
      {props.category} content
    </div>
  );
}

export default Gallery;
