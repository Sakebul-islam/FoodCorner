import { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon/CartIcon';
import CartContext from '../../../context/cart-context';

import classes from './HeaderCardButton.module.css';

const HeaderCardButton = props => {
  const [btnIsHihlighted, setBtnIsHihlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  
  const { items } = cartCtx;

  const numberOfCartItem = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);


  const btnClasses = `${classes.button} ${btnIsHihlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHihlighted(true);
    const timer = setTimeout(()=>{
    setBtnIsHihlighted(false);
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCardButton;
