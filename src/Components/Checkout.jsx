// import React from 'react'
// import '../StyledComponents/Checkout.css'
// import { useStateValue } from './StateProvider'
// import CheckoutProduct from './CheckoutProduct'
// import Subtotal from './Subtotal'
// const Checkout = () => {
//   const [{basket}]=useStateValue()
//   return (
//   <div className="checkout">
// <img className='checkout__ad' src="" alt="" />



// {
//   basket?.length === 0 ?(
//     <div>
//       <h2>Your shopping basket is empty</h2>
//       <p>you have no items in your basket .to buy one or more items. cliick "Add to basket " next to the item</p>
//     </div>
//   ):(
//     <div>
//       <h3 className='check__title'>Your Shopping Basket</h3>
//       {/* list out all of the checkout products */}
//      {basket.map((item)=>{
//       return <CheckoutProduct
      
     
//       id={item.id}
//       title={item.title}
//       image={item.image}
//       price={item.price}
//       rating={item.rating}

      
//       />
      
      

//      })}
//     </div>
//   )
// }







// {basket.length > 0 && (
//   <div className='checkout__right'>
// <Subtotal/>
//   </div>
// )}
//   </div>
//   )
// }

// export default Checkout



import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal,removeItem,decreaseItemQuantity,increaseItemQuantity } from "../app/CartSlice"; 

import '../StyledComponents/CheckoutProduct.css'
const Checkout = () => {

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div>
     {
      cart?.length=== 0 ?(
            <div>
              <h2>Your shopping basket is empty</h2>
              <p>you have no items in your basket .to buy one or more items. cliick "Add to basket " next to the item</p>
            </div>):(
            <div>
                <h3 className='check__title'>Your Shopping Basket</h3>
                    {/* list out all of the checkout products */}
                {cart?.map((data)=>{
                  return <div>
                   <div className="checkoutProduct">

         <img src={data.img} alt=""  className='checkoutProduct__image'/><div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                 {data.title}
             </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                 <strong>{data.price}</strong>
             </p>
          
             <button onClick={() => dispatch(removeItem(data.id))}>Remove from Basket</button>
    <button  onClick={() =>dispatch(increaseItemQuantity(data.id))}>Increase the item</button>
    <button    onClick={() =>dispatch(decreaseItemQuantity(data.id))}>Decrease the item</button>
    <strong>Total Quantity :{totalQuantity}</strong>

         </div>   
          </div>
          <strong>Total Quantity :{totalQuantity}</strong>


                  </div>
                })}
            </div>
            )
     }






     {/* /// */}
     
<strong>Total Quantity :{totalQuantity}</strong>
<strong>Total amount :{totalPrice}  </strong>
    </div>
  )
}



export default Checkout
