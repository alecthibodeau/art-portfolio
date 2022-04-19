/* Interfaces */
import Piece from '../../interfaces/Piece';

/* Helpers */
import { getPieceImage } from '../../helpers/pieces';

function PieceScreen(props: Piece) {
  return (
    <div className="mx-3 d-flex flex-column align-items-center">
      <img
        className="my-3 mw-100 piece"
        src={getPieceImage(props.id)}
        alt={`${props.title} by Alec Thibodeau`}
      />
      <div className="fw-bold">
        {props.title}
      </div>
      <div>
        {props.medium}
      </div>
    </div>
  );
}

export default PieceScreen;
