import React from 'react'
import '../StyledComponents/Home.css'
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
      <img className='home__image' src="images/amazon-background-image.png" alt="" />
    

{/* product id,title,price,rating ,image */}
<div className="home__row">
<Product

/>

</div>
    </div>
  )
}

export default Home