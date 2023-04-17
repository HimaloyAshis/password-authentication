import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleDelete}) => {
    // console.log(product)
    const {id,name,price,img,seller,quantity} = product
    return (
        <div className='reviewDetail'>
            <img src= {img} alt="" />
            <div className='more-detail'>
                <p className='title'>{name}</p>
                <p>Product Price <span className='orange-clr'> ${price}</span></p>
                <p>Product Quantity : {quantity}</p>
            </div>
            <button onClick={()=>{handleDelete(id)}} className='icon'> <FontAwesomeIcon className='' icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
    );
};

export default ReviewItem;