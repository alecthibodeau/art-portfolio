import React from 'react';
import { useEffect } from 'react';

/* Interfaces */
import InfoModalProps from '../interfaces/InfoModalProps';

/* Constants */
import variables from '../constants/_variables';

/* Styles */
import '../styles/info-modal.scss';

function InfoModal(props: InfoModalProps): React.JSX.Element {
  const { dimensionSVGClosingXPoints } = variables;

  const keydown = 'keydown';
  const keyEscape = 'Escape';

  useEffect(() => {
    function keyDownHandler({ key }: KeyboardEvent): void {
      if (key === keyEscape && props.isModalDisplayed) props.onClickCloseButton();
    }
    window.addEventListener(keydown, keyDownHandler);
    return function cleanupEventListener() {
      window.removeEventListener(keydown, keyDownHandler);
    };
  }, [props, props.isModalDisplayed]);

  return (
    <div className="info-modal-wrapper">
      <div className="info-modal">
        <div className="info-modal-header">
          <button
            name="close"
            className="info-modal-close"
            onClick={props.onClickCloseButton}>
            <svg
              viewBox="30 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon fill="#fff" points={dimensionSVGClosingXPoints}/>
            </svg>
          </button>
        </div>
        <div className="info-modal-message">
          <span>Thanks for your message!</span>
          <span>I'll get back to you soon.</span>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
