import React from 'react';

const ProductCard = (props) => {
    return (
        <div>
            <div>
              <img src={props.imageUrl} alt="Product"></img>
            </div>

            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>Price: ${props.price}</p>
        </div>
    )
}

export default ProductCard;