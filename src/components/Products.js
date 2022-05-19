import React, {
  useState,
  useEffect
} from 'react';
import Card from './Products/Card';
import './Products/card.css';
import Sidebar from './Sidebar';
import {FaComment, FaUserCircle} from 'react-icons/fa';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [user, setUser] = useState('');
  const [navIsOpen, setNavIsOpen] = useState(false);

  const fetchApi = async () => {
    let data = await fetch('https://fakerapi.it/api/v1/products?quantity=1')
      .then(response => response.json());
      setProductList(data.data);
  }
  // fetchApi();
  useEffect(() => {
    fetchApi();
    setUser(sessionStorage.getItem('current-user'));
    return () => {
      window.removeEventListener('load', fetchApi);
    }
  }, []);
  
  return ( 
    <div className='relative flex flex-row border-2 border-blue-700 rounded-r-3xl overflow-hidden full-vh'>
      {/* <div className='rounded-3xl bg-blue-700 absolute top-0 left-0 w-full h-60'></div> */}
      {/* <p className='fixed right-12 bottom-12 bg-blue-700 shadow-lg text-white '><i><FaComment/></i> Chat Us</p> */}
      <Sidebar isOpen={navIsOpen}/>
      <div className='p-3 py-7 relative lg:w-5/6 full-vh overflow-auto w-full'>   
        <div className='flex flex-row items-center justify-between  mb-4 '>
        <h1 className='text-blue-700 font-extrabold text-2xl'>Products</h1>
        <div className='flex flex-row text-lg items-center'>
          <i className='mr-2'><FaUserCircle /></i> {user !== ''? 'user' : user}
        </div>
        </div>
        <div className='flex flex-wrap justify-center'>
          {productList.map(({name, image, id, net_price, price, taxes}) => (
            <Card 
              name={name}
              image={image}
              key={id}
              net_price={net_price}
              taxes={taxes}
              price={price}
              productList={productList}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;