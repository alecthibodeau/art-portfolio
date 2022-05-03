import { Link } from 'react-router-dom';

/* Images */
import wordmark from '../assets/images/main/alec-thibodeau-wordmark-ninety-percent-gray.svg';

function Header() {
  return (
    <header className="my-3 d-flex flex-column align-items-center">
      <Link to="/">
        <img className="wordmark" src={wordmark} alt="Alec Thibodeau wordmark" />
      </Link>
    </header>
  );
}

export default Header;
