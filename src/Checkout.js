import React from 'react'
import "./Checkout.css"
import img8 from './images/banner.jpg'
import Subtotal from './Subtotal'
import { useStateValue } from './Stateprovider'
import CheckoutProduct from './CheckoutProduct'
 
function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className='Checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src={img8}
                />


                {basket?.length === 0 ? (
                    <div>
                        <h2>
                            Your Shopping Basket is empty
                        </h2>
                        <p>
                            You hane no items in your basket . To buy one or "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (

                    <div>
                        <h2 className='checkout__title'>
                            Your Shopping Basket
                        </h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (

                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout