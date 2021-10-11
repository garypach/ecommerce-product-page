import Image from "next/image";
const PlusMinusCartPrice = (props) => {
  return (
    <div className="container">
      <Price/>
      <div className="logicbuttons">
      <PlusMinus/>
      <AddCart/>
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
const PlusMinus = (props)=>{
    return(
        <div className="plus-minus-container">
            <div className="minus">
            <Image src='/../public/assests/images/icon-minus.svg' height='8px' width='15px' alt="minus"/>
            </div>
            <div className="count">
            0
            </div>
            <div className="plus">
            <Image src='/../public/assests/images/icon-plus.svg' height='15px' width='15px' alt="plus"/>
            </div>
        </div>
    )
}

const AddCart = (props)=>{
    return(
        
    
            <div className="addcart">
            <Image src='/../public/assests/images/icon-cart.svg' height='20px' width='20px' alt="cart"/>
            <p>Add to cart</p>
            </div>
          
        
    )
}


export default PlusMinusCartPrice;