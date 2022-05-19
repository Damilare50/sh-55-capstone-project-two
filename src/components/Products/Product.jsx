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

            </div>
        </div>
        <div>
            <h3>Other Products</h3>
        </div>
    </div>
  )
}
