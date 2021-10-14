import Image from "next/image";
import { useContext } from "react";
import CartContext from "../../context/cart/cartcontext";
const PlusMinusCartPrice = ({product}) => {
  const { addToCart,itemCount,inc,dec} = useContext(CartContext);

  return (
    <div className="container">
      <Price/>
      <div className="logicbuttons">
      <div className="plus-minus-container">
            <div className="minus" onClick={()=>dec(itemCount)}>
            <Image src='/../public/images/icon-minus.svg' height='8px' width='15px' alt="minus"/>
            </div>
            <div className="count">
            {itemCount}
            </div>
            <div className="plus" onClick={()=>inc()}>
            <Image src='/../public/images/icon-plus.svg' height='15px' width='15px' alt="plus"/>
            </div>
        </div>
      
      <div className="addcart" onClick={()=>addToCart(product,itemCount)}>
            <Image src='/../public/images/icon-cart.svg' height='20px' width='20px' alt="cart"/>
            <p>Add to cart</p>
            </div>
      </div>
    </div>
  );
};
const Price = (props) => {
    return (
      <div className="price-container">
        <div className="pdis">
        <div className="price">
        <p>$125.00</p>
        </div>
        <div className="discount">
        <p>50%</p>
        </div>
        </div>
        <div className="old-price">
        <p>$250.00</p>
        </div>
      </div>
    );
  };


export default PlusMinusCartPrice;