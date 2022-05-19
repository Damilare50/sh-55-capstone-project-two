import React from 'react'

export default function Product({product_name, product_price, net_price, images, taxes}) {
  return (
    <div>
        <div>
            <div></div>
            <div>
                <h1>{product_name}</h1>
                <h3>{product_price}</h3>
                <p>Net price: {net_price}</p>
                <p>Tax(es): {taxes}</p>
            </div>
        </div>
        <div>
            <h3>Other Products</h3>
        </div>
    </div>
  )
}
