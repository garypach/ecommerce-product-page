import Image from 'next/image'
const ImageBox = () =>{
    return(
    <div className="image-container">
        <Image src='/../public/assests/images/image-product-1.jpg' height='100%' width='1000px' alt="product"/>
        <div className="arrows">
            <div>
            <Image src='/../public/assests/images/icon-previous.svg' height='100%' width='50px' alt="product"/>
            </div>
            <div>
            <Image src='/../public/assests/images/icon-next.svg' height='100%' width='50px' alt="product"/>
            </div>
        </div>
    </div>
    )
  
}

export default ImageBox;