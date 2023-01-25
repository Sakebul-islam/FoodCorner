import CartContext from './cart-context';

const CartProvider = (props) => {
  const addltemToCartHandler = item => {};
  const removeItemFromCartHandler = id => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addltemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
