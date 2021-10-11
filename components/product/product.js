import ImageBox from "../imagebox/imagebox";
import SneakerBox from "../sneakerbox/sneakerbox";

const Product = (props) =>{
    return(
    <div className="product-container">
        <ImageBox/>
        <SneakerBox/>
    </div>
    )
  
}

export default Product;