import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../Sidebar';

export default function Product({productList, navIsOpen, setNavIsOpen}) {
  let {id} = useParams();
  return (
    <div>
          <div className='relative flex flex-row border-2 border-blue-700 rounded-r-3xl overflow-hidden full-vh'>
      <Sidebar isOpen={navIsOpen} setIsOpen={setNavIsOpen}/>
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
    </div>
  )
}
