import React from 'react';
import Bouton from './Bouton';

function Morepage() {
  return (
    <div className="Morepage">
      <h5>More Pages</h5>
      <Bouton icon="envelope" text="Email Box" iconColor="blue" />
      <Bouton icon="hotel" text="Near Hotel" iconColor="blue" />
      <Bouton icon="calendar-event" text="Latest Event" iconColor="blue" />
      <Bouton icon="video" text="Live Stream" iconColor="blue" />
    </div>
  );
}
export default Morepage;
