import React from 'react';
import '../../component-styles/Misc/CoolButton.scss'

const CoolNavLink = ({navLinkLabel}) => {
  return (
    <>
      <div
        className="button"

      >
        <span className="button__mask"></span>
        <span className="button__text">{navLinkLabel}</span>
        <span className="button__text button__text--bis">{navLinkLabel}</span>
      </div>
      
      </>
  );
};

export default CoolNavLink;