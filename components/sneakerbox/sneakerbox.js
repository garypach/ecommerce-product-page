import PlusMinusCartPrice from "../header/buttons/plusminuscartprice";
import SneakerDesc from "../sneakerdesc/sneakerdesc";
import SneakerTitle from "../sneakertitle/sneakertitle";
import products from "../data";

const SneakerBox = () =>{
    return(
    <div className="sneakerbox-container">
         <SneakerTitle/>
         <SneakerDesc/>
         <PlusMinusCartPrice product={products[0]}/>
    </div>
    )
  
}

export default SneakerBox;