import { Link } from 'react-router-dom';

/* Images */
import { wordmarkForHeader } from '../helpers/images-general';

function Header(): JSX.Element {
  return (
    <header className="my-2 d-flex flex-column align-items-center">
      <Link to="/">
        <img className="wordmark" src={wordmarkForHeader} alt="Alec Thibodeau wordmark" />
      </Link>
    </header>
  );
}

export default Header;
