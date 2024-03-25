import { Link } from 'react-router-dom';

/* Interfaces */
import MailToLinkProps from '../interfaces/MailToLinkProps';

function MailToLink({ label, mailTo }: MailToLinkProps): JSX.Element {
  return (
    <Link
      to='#'
      onClick={(event) => {
          window.location.href = mailTo;
          event.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default MailToLink;
