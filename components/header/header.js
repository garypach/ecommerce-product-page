import Image from 'next/image'
const Header = () =>{
    return(
        <div className="header-container">
        <div className="logo-menu">
        
        <div className="menu">
        <Image src='/../public/assests/images/icon-menu.svg' height={15} width={20}/>
        </div>
        <div className="logo">
        <Image src='/../public/assests/images/logo.svg' height={20} width={100}/>
        </div>
        </div>
        <div className="cart-profile">
        <div className="cart">
        <Image src='/../public/assests/images/icon-cart.svg' height={20} width={20}/>
        </div>
        <div className="profile">
        <Image src='/../public/assests/images/image-avatar.png' height={30} width={30}/>
        </div>
        </div>
    </div>
    )
  
}

export default Header;