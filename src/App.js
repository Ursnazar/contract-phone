import React from 'react';

import './assets/style/style.scss';
import GoodsList from './components/GoodsList';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <GoodsList />
      </div>
    </div>
  );
}

export default App;
