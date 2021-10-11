import Image from 'next/image'
const ImageBox = () =>{
    return(
    <div className="image-container">
        <Image src='/../public/assests/images/image-product-1.jpg' height='100%' width='1000px' alt="product"/>
        <div className="arrows">
            <div className="prev-arrow">
            <Image src='/../public/assests/images/icon-previous.svg' height='20px' width='20px' alt="product"/>
            </div>
            <div className="next-arrow">
            <Image src='/../public/assests/images/icon-next.svg' height='20px' width='20px' alt="product"/>
            </div>
        </div>
    </div>
    )
  
}

export default ImageBox;