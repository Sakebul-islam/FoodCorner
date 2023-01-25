import { Fragment, useState } from 'react';

import './App.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartlsShown, setCartlsShown] = useState(false);

  const showCartHandler = () => {
    setCartlsShown(true);
  };

  const hideCartHandler = () => {
    setCartlsShown(false);
  };
  return (
    <Fragment>
      {cartlsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
