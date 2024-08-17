
import Morepage from './Morepage';
import Account from './Account';
import Newfeeds from './Newfeeds';
import React from 'react';

function Sidebarleft() {
  return (
    <div className="Sidebarleft">
  <Newfeeds/>
 <Morepage/>
  <Account/>

    </div>
  );
}
export default Sidebarleft;