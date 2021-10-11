import Image from 'next/image'
const ImageBox = () =>{
    const imagerow = () =>{
        let thumbnail =[];
        for(let i = 1; i <= 4; i++){
        thumbnail.push(<ImageShow imagenumber = {`${i}`}/>);
        }
        return thumbnail;

    }

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
        <div className="image-row">
            {imagerow()}

        </div>
    </div>
    )
  
}

const ImageShow = (props) =>{
    return(
        <Image src={`/../public/assests/images/image-product-${props.imagenumber}-thumbnail.jpg`} height='100%' width='1000px' alt="product"/>

    )
}

export default ImageBox;