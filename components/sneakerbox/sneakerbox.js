import PlusMinusCartPrice from "../header/buttons/plusminuscartprice";
import SneakerDesc from "../sneakerdesc/sneakerdesc";
import SneakerTitle from "../sneakertitle/sneakertitle";

const SneakerBox = () =>{
    return(
    <div className="sneakerbox-container">
         <SneakerTitle/>
         <SneakerDesc/>
         <PlusMinusCartPrice/>
    </div>
    )
  
}

export default SneakerBox;