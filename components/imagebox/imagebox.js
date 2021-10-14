import Image from 'next/image'
import { useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
const desktopimages = [
    {id:'1', imageName:'image-product-1.jpg',tag:('1','image')},
    {id:'2', imageName:'image-product-2.jpg',tag:('2','image')},
    {id:'3', imageName:'image-product-3.jpg',tag:('3','image')},
    {id:'4', imageName:'image-product-4.jpg',tag:('4','image')}
]
const thumnailimages = [
    {id:'1', imageName:'image-product-1-thumbnail.jpg',tag:('1','image')},
    {id:'2', imageName:'image-product-2-thumbnail.jpg',tag:('2','image')},
    {id:'3', imageName:'image-product-3-thumbnail.jpg',tag:('3','image')},
    {id:'4', imageName:'image-product-4-thumbnail.jpg',tag:('4','image')}
]
const options = {
    settings: {
      overlayColor: "rgba(0, 0, 0, 0.9)",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
      downloadedFileName: false,
    },
    buttons: {
      backgroundColor: "white",
      iconColor: "rgba(0, 0, 0,)",
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      captionColor: "#a6cfa5",
      captionFontFamily: "Raleway, sans-serif",
      captionFontWeight: "300",
      captionTextTransform: "uppercase",
      showCaption: false,
    },
    thumbnails: {
        showThumbnails: false,
    }
  };
const ImageBox = () =>{
    const[tag,setTag] = useState(0);
    const[selectedImage,setSelectedImage] = useState([]);
    useEffect(()=>{
        tag === 0 ? setSelectedImage(desktopimages[0]) : setSelectedImage(desktopimages[tag])
    },[tag])
   
    const [current, setCurrent] = useState(0);
    const length = desktopimages.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(desktopimages) || desktopimages.length <= 0) {
      return null;
    }

    return(
    <div className="image-container">
        <SRLWrapper options={options}>
            <a className="img-desktop" href={`/../public/${selectedImage.imageName}`}>
            <Image src={`/../public/${selectedImage.imageName}`} height='1000px' width='1000px' alt={`${selectedImage.tag}`}/>
        </a>
        </SRLWrapper>
        {desktopimages.map((slide, index) => {
        return (
          <div
            className="img-mobile"
            key={index}
          >
            {index === current && (
             <Image src={`/../public/${slide.imageName}`} height='1000px' width='1000px' alt={`${slide.imageName}`}/>
            )}
          </div>
        );
      })}
        <div className="arrows">
            <div className="prev-arrow" onClick={prevSlide}>
            <Image src='/../public/icon-previous.svg' height='20px' width='20px' alt="product"/>
            </div>
            <div className="next-arrow" onClick={nextSlide}>
            <Image src='/../public/icon-next.svg' height='20px' width='20px' alt="product"/>
            </div>
        </div>
        <div className="image-row">
            <TagImage number={0} handleSetTag={setTag} tagActive={tag === 0 ? true : false }/>
            <TagImage number={1} handleSetTag={setTag} tagActive={tag === 1 ? true : false }/>
            <TagImage number={2} handleSetTag={setTag} tagActive={tag === 2 ? true : false }/>
            <TagImage number={3} handleSetTag={setTag} tagActive={tag === 3 ? true : false }/>

        </div>
    </div>
    )
  
}
const TagImage = ({number,handleSetTag,tagActive}) =>{
    return <div className="single"><Image srl_gallery_image="true" className={`tag ${tagActive ? 'active' : null}`} onClick={ () => handleSetTag(number)} src={`/../public/image-product-${number + 1 }-thumbnail.jpg`} height='100%' width='1000px' alt="product"/>
            </div>
}

export default ImageBox;