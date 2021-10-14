import Image from 'next/image'
import SideBar from '../sidebar/sidebar';
import CartContext from '../context/cart/cartcontext';
import { useContext } from 'react';
import Cart from '../cartbox/cartbox';
const Header = () =>{
    const { cartItems, showHideCart } = useContext(CartContext);
        return(
        <div className="header-container">
        <div className="logo-menu">
        <SideBar/>
        <div className="logo">
        <Image src='/../public/images/logo.svg' height={20} width={100}/>
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
        <div className="cart" onClick={showHideCart}>
        <Image src='/../public/images/icon-cart.svg' height={20} width={20}/>
        {cartItems.length > 0 && <div className="itemscount">{cartItems.length}</div>}
        <Cart/>
        </div>
        <div className="profile">
        <Image src='/../public/images/image-avatar.png' height={30} width={30}/>
        </div>
        </div>
    </div>
    )
  
}

export default Header;