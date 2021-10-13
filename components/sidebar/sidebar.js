import { useState } from "react";
import Image from "next/dist/client/image";
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
  
    return (
      <nav>
        <div className="menu" onClick={toggle}>
        <Image src='/../public/assests/images/icon-menu.svg' height={15} width={20}/>
        </div>
        <ul onClick ={hide} className={`mobile-menu ${isOpen ? 'mobile-active' : ''}`}>
        <li> <div className="close-menu" onClick={toggle}>
        <Image src='/../public/assests/images/icon-close.svg' height={16} width={16}/>
        </div>
        </li>
        <li onClick ={hide}>
                    Collections
                </li>
                <li onClick ={hide}>
                    Men
                </li>
                <li onClick ={hide}>
                    Women
                </li>
                <li onClick ={hide}>
                    About
                </li >
                <li onClick ={hide}>
                    Contact
                </li>
        </ul>
      </nav>
    );
  };
  export default SideBar;