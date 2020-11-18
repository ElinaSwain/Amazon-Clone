import React from 'react';
import './CheckOut.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function CheckOut() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkOut">
            <div className="checkOut__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/PC/Page_Top_Banner.jpg" alt="" />
                <div>
                    <h3>Hello, {user ? user.email : 'Guest'}</h3>
                    <h2 className="checkOut__title">Your Shopping Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating} />
                    ))}
                    
                </div>                
            </div>

            <div className="checkOut__right">
                <Subtotal />
            </div>           
        </div>
    )
}

export default CheckOut
