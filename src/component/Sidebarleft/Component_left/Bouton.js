import React from 'react';
import Icons from './Icons';

function Bouton({ icon, text, iconColor }) {
  return (
    <div className="title-project">
      <button className="favorite styled" type="button">
        <a>
          <Icons name={icon} color={iconColor} />
          {text} 
        </a>
      </button>
    </div>
  );
}

export default Bouton;