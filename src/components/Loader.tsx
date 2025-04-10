import React from 'react';

/* Styles */
import '../styles/loader.scss';

function Loader(): React.JSX.Element {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
