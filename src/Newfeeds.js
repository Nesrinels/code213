import React from 'react';
import './App.css';
import Bouton from './Bouton';

function Newfeeds() {
  return (
    <div className="Newfeeds">
      <h5>New Feeds</h5>
      <Bouton icon="home" text="Newfeed" />
      <Bouton icon="star" text="Badges" />
      <Bouton icon="book" text="Explore Stories" />
      <Bouton icon="group" text="Popular Groups" />
      <Bouton icon="user" text="Author Profile" />
    </div>
  );
}
export default Newfeeds;