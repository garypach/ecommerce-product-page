import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INC, DEC } from "../types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case INC: {
      return {
        ...state,
        itemCount: state.itemCount + 1
      };
    }
    case DEC: {
      return {
        ...state,
        itemCount: state.itemCount - 1
      };
    }

    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }
    
    default:
      return state;
  }
};

export default CartReducer;