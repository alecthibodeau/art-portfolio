import { Link } from 'react-router-dom';

/* Images */
import wordmark from '../assets/images/main/alec-thibodeau-wordmark.jpg';

function Header() {
  return (
    <header className="mt-3">
      <Link className="row justify-content-center" to="/">
        <img className="wordmark" src={wordmark} alt="Alec Thibodeau wordmark" />
      </Link>
    </header>
  );
}

export default Header;
