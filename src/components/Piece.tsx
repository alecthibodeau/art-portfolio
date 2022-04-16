/* Interfaces */
import PieceProps from '../interfaces/PieceProps';

/* Helpers */
import { getPieceImage } from '../helpers/pieces';

function Piece(props: PieceProps) {
  return (
    <div className="mx-3 d-flex flex-column align-items-center">
      <img
        className="my-3 piece"
        src={getPieceImage(props.id)}
        alt={props.alt}
      />
      <div className="bold">
        {props.title}
      </div>
      <div>
        {props.medium}
      </div>
    </div>
  );
}

export default Piece;
