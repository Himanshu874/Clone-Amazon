import React from 'react'
import "./Home.css";
import Product from './Product';
import img1 from './images/primewallpaper.jpg'
import img2 from './images/thinklikeamonk.jpg'
import img3 from './images/grinder.jpg'
import img4 from './images/watch.jpg'
import img5 from './images/echo.jpg'
import img6 from './images/ipad.jpg'
import img7 from './images/tv.jpg'

function Home() {
  return (
    <div className='Home'>
      <div className='home__container'>
        <img className='home__image' src={img1} />
        <div className='home__row'>
          <Product
            id="14526389"
            title='Think Like A Monk' 
            price={29.99} 
            image={img2} 
            rating={5} />
          <Product 
            id="73818374"
            title='KenWood kMix Mixer for Baking, Stylish Kitchen Mixer With K-beater, Doung Hook and Whisk, 5Liter Glass Bowl'
            price={265.9}
            image={img3}
            rating={4}
            />

        </div>

        <div className='home__row'>
          <Product 
          id="51514976"
          title="Samsung Galaxy Watch5 LTE (44 mm, Sapphire, Compatible with Android only)"
          price = {98.99}
          image={img4}
          rating={5}
          />
         
          <Product 
          id={62154872}
          title="Amazon Echo (3rd Gen) | Smart Speaker With Alexa, Charcoal Fabric"
          price={103.90}
          image={img5}
          rating={4}
          />

          <Product 
          id={61740597}
          title="Apple Ipad Pro (12.9-inch, Wi-Fi,128GB) -Silver (4th Gen)"
          price={562.66}
          image={img6}
          rating={5}/>

        </div>

        <div className='home__row'>
          <Product 
          id={89522620}
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={600.99}
          image={img7}
          rating={5}/>
        </div>
      </div>
    </div>
  )
}

export default Home