/* Config */
import config from '../../config.json';

/* Interfaces */
import Piece from '../../interfaces/Piece';

/* Helpers */
import { getPieceImage } from '../../helpers/images-gallery-pieces';

function PieceScreen(props: Piece): JSX.Element {
  return (
    <div className="mx-3 d-flex flex-column align-items-center text-center">
      <img
        className={`my-3 mw-100 ${props.noBorder ? '' : 'piece-with-border'}`}
        src={getPieceImage(props.id)}
        alt={`${props.title} ${props.category} ${config.artistCredit}`}
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
