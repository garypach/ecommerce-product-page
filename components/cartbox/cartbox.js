import { useContext } from "react";
import CartContext from "../context/cart/cartcontext";
import formatCurrency from "format-currency";
import CartItem from "../cartitem/cartitem";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? ( 
              <div>
                <div className="cart-title">
                <p>Cart</p>
              </div>
              <div className="empty-cart">
              <p>Your cart is empty</p>
              </div>
              </div>
              
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          {cartItems.length > 0 && <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts
              )}
            </div>
          </div>}
          
        </div>
      )}
    </>
  );
};

export default Cart;