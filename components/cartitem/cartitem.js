import { useContext } from "react";
import CartContext from "../context/cart/cartcontext";
import formatCurrency from "format-currency";
import Image from 'next/image'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };
  return (
    <li className='CartItem__item'>
            <Image src={`/../public/assests/images/${item.image}`} height='50px' width='50px' alt={`${item.image}`}/>
      <div className="cart-desc">
        <div>

        {item.name} 
        </div>
        <div>
          {formatCurrency(`${item.price}`, opts)}
          </div>
      </div>
      
      <div className="CartItem__button" onClick={() => removeItem(item._id)}>
        <Image src='/../public/assests/images/icon-delete.svg' height={20} width={20}/>
        </div>      
    </li>
  );
};

export default CartItem;