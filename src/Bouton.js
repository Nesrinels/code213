// src/components/Bouton.js
import React from 'react';
import Icon from './Icon';

function Bouton({ icon, text, iconColor }) {
  return (
    <div className="title-project">
      <button className="favorite styled" type="button">
        <a>
          <Icon name={icon} color={iconColor} />
          {text}
        </a>
      </button>
    </div>
  );
}

export default Bouton;
