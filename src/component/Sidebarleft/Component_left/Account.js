import React from 'react';
import Bouton from './Bouton';

function Account() {
  return (
    <div className="Account">
      <h5>Account</h5>
      <Bouton icon="cog" text="Settings" iconColor="gray" />
      <Bouton icon="bar-chart" text="Analytics" iconColor="gray" />
      <Bouton icon="chat" text="Chat" iconColor="gray" />
    </div>
  );
}

export default Account;