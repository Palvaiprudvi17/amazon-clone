

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import '../StyledComponents/Product.css'
import { addToCart } from "../app/CartSlice";




const Product = () => {
  const items = useSelector((state) => state.allCart.items);
  console.log(items)
  const dispatch = useDispatch();
  return (
  <div className="productssss">
    {
      items.map((item)=>{
        return <div key={item.id}>
            <div className="product">
  <div className="product__info">
  <p>{item.title}</p>
  <p className="product__price">
    <small>$</small>
    <strong>{item.price}</strong>
  </p>
  
  </div>
  <img src={item.img} alt=""  />
  <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
 </div>
        </div>
      })
    }
  </div>
//  <h3>this is product componets</h3>
  )
}

export default Product





// import React from 'react'

// const Product = () => {
//   return (
//     <div>Product</div>
//   )
// }

// export default Product