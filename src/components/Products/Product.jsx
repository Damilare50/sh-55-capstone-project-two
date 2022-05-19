import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({productList}) {
  let {id} = useParams();
  return (
    <div>
        <div>
            <div></div>
            <div>
                <h1>{productList[id - 1].name}</h1>
                {/* <h3>{product_price}</h3>
                <p>Net price: {net_price}</p>
                <p>Tax(es): {taxes}</p> */}
            </div>
        </div>
        <div>
            <h3>Other Products</h3>
        </div>
    </div>
  )
}
