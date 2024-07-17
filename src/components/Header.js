import { LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header= () => {
  
  const [btnNameReact,setbtnNameReact] = useState ("Login");

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className=" logo" src={LOGO_URL}></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li><a href="/about">  About Us</a>
          </li>
          <li><a href="/contact"></a> Contact Us</li>
          <li>Cart</li>
          <button className="btn" 
          onClick={() =>{
            btnNameReact === "Login" ? setbtnNameReact ("Logout"): setbtnNameReact ("Login");
            }}>
              {btnNameReact}
              </button>
        </ul>
      </div>
    </div>


  );
};
export default Header;