import React from 'react';
import './CoolButton.scss'

const CoolButton = ({buttonLabel}) => {
  return (
    <>
      <div
        className="button"

      >
        <span className="button__mask"></span>
        <span className="button__text">{buttonLabel}</span>
        <span className="button__text button__text--bis">{buttonLabel}</span>
      </div>
      
      </>
  );
};

export default CoolButton;