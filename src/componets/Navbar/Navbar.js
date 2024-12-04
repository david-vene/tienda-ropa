import css from "./Navbar.module.css";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
    return (
      <div className={css.App}>
        <header className={css.App_header}>
          <FaHome style={{fontSize: '50px'}} />
        
          <h1>
          Urban Vibes
          </h1>
    
          

          <FaShoppingCart style={{fontSize: '50px'}} link to ="/about" />
          
          
        </header>
   </div>   
  
)}
  
  export default Header;
  