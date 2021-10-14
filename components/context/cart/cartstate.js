import { useReducer } from "react";
import CartContext from "../cart/cartcontext";
import CartReducer from "../cart/cartreducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INC, DEC } from "../types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    itemCount:0,
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item,itemCount) => {
    for(let i = 1; i <= itemCount; i++ ){
      dispatch({ type: ADD_TO_CART, payload: item });
    }
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const inc = () => {
    dispatch({ type: INC});
  };
  const dec = (itemcount) => {
    if(itemcount !== 0){
      dispatch({ type: DEC});
    }
  };
  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        itemCount: state.itemCount,
        addToCart,
        showHideCart,
        removeItem,
        inc,
        dec,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;