import Image from 'next/image'
import SideBar from '../sidebar/sidebar';
const Header = () =>{
    return(
        <div className="header-container">
        <div className="logo-menu">
        <SideBar/>
        <div className="logo">
        <Image src='/../public/assests/images/logo.svg' height={20} width={100}/>
        </div>
        <div className="nav-menu">
            <ul>
                <li>
                    Collections
                </li>
                <li>
                    Men
                </li>
                <li>
                    Women
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
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