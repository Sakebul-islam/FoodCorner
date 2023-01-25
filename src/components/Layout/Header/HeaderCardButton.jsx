import { useContext } from 'react';

import CartIcon from '../../Cart/CartIcon/CartIcon';
import CartContext from '../../../context/cart-context';

import classes from './HeaderCardButton.module.css';

const HeaderCardButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCardButton;
