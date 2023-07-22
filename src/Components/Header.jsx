import React ,{useEffect}from 'react'
import '../StyledComponents/Header.css'
import { Link } from 'react-router-dom'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'



import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from '../app/CartSlice'

const Header = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);









  return (
    <nav className='header'>
        
        
        {/*logo on the left ->image  */}
<Link to={'/'}>
<img className='header__logo' src="images/amazon-logo.png1.png" alt="amazon-clone" />
</Link>
        {/* search box */}
<div className="header__search">
<input type="text" className="header__searchInput"  />
        <BiSearchAlt2 className='header__searchIcon'/>
</div>
        {/*  3 links */}


        <div className="header__nav">
            {/* 1st link */}
<Link to={'/login'} className="header__link">
    <div className="header__option">
        <span className="header__optionLineOne">Hello Arjun</span>
        <span className="header__optionLineTwo">Sign In</span>
    </div>
</Link>
             {/* 2nd link */}
<Link to={'/'} className="header__link">
    <div className="header__option">
        <span className="header__optionLineOne">Return </span>
        <span   className="header__optionLineTwo">& Orders</span>
    </div>
</Link>
              {/* 3rd link */}

<Link to={'/'} className="header__link">
    <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
    </div>
</Link>





{/* 4rd link */}


<Link to={'/checkout'} className="header__link">
    <div className="header__optionBasket">
        {/* shopping basket icon */}
   <AiOutlineShoppingCart/>
        {/* number of items in the basket */}
        <span className='header__optionLineTwo  header__basketCount'>Cart({totalQuantity})</span>
    </div>
</Link>
        </div>
        {/* basket icon with number */}
        
        </nav>
  )
}

export default Header