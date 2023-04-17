import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCard = useLoaderData()
    const [card, setCard] = useState(saveCard)
    const handleDelete=(id)=>{
        const remaining = card.filter(pd=>pd.id!==id)
        setCard(remaining)
        removeFromDb(id)
    }

    const allDelete=()=>{
        setCard([])
        deleteShoppingCart()
    }
    return (
        <div className='card-Detail'>
            <div >
                {
                    card.map(Product=><ReviewItem product={Product} key={Product.id} handleDelete={handleDelete}></ReviewItem>)
                }
            </div>
            <div className='cart-part'>
                <Cart cart={card} allDelete={allDelete}>
                    <Link to={'/order'}><button className='review'>Review order</button></Link>
                     </Cart>
            </div>
        </div>
    );
};

export default Order;