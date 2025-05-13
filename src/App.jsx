import React from 'react';

import AppleStyleMenu from './pages/client/dashboard';
import Productos from './pages/client/Productos';
import Tienda from './pages/client/Tienda';
import Extra from './pages/client/Extra';
import Footer from './pages/client/Footer';

const App = () => {
  return (

    <div className='body-div'>
      <AppleStyleMenu />
      <Productos />
      <Tienda />
      <Extra />
      <Footer></Footer>
    </div>

  );
};

export default App;
