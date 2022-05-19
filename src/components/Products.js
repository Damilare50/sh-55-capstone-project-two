import React, {
  useState,
  useEffect
} from 'react';
import Card from './Products/Card';
import './Products/card.css';
import Sidebar from './Sidebar';
import { FaUserCircle, FaBars } from 'react-icons/fa';

const Products = ({setProductList, productList, navIsOpen, setNavIsOpen}) => {
  const [user, setUser] = useState('');
  const fetchApi = async () => {
    let data = await fetch('https://fakerapi.it/api/v1/products?quantity=1')
      .then(response => response.json());
      setProductList(data.data);
  }
  useEffect(() => {
    fetchApi();
    let userEmail = JSON.parse(sessionStorage.getItem('current_user')).userEmail;
    setUser(userEmail);
    console.log(user);
    return () => {
      window.removeEventListener('load', fetchApi);
    }
  }, []);

  return ( 
    <div className='relative flex flex-row border-2 border-blue-700 rounded-r-3xl overflow-hidden full-vh'>
      <Sidebar isOpen={navIsOpen} setIsOpen={setNavIsOpen}/>
      <div className='p-3 py-7 relative lg:w-5/6 full-vh overflow-auto w-full'>
        <div className=' sm:hidden flex flex-row justify-between items-center'>
          <button onClick={() => setNavIsOpen(true)}>
            <FaBars/>
          </button>
          <div className='flex flex-row text-lg items-center text-gray-600 mb-2'>
            <i className='mr-2'><FaUserCircle /></i> {user === ''? 'user' : user}
          </div> 
        </div>  
      
        <div className='flex flex-row items-center justify-center sm:justify-between  mb-4 '>
          <button onClick={() => setNavIsOpen(true)} className="hidden sm:block md:hidden">
              <FaBars/>
          </button>
          <h1 className='text-blue-700 font-extrabold text-2xl'>Products</h1>
          <div className='flex-row text-lg items-center hidden sm:flex text-gray-600'>
            <i className='mr-2'><FaUserCircle /></i> {user === ''? 'user' : user}
          </div> 
        </div>
        <div className='flex flex-wrap justify-center'>
          {productList.map(({name, image, price, id}) => (
            <Card 
              name={name}
              image={image}
              key={id}
              id={id}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products;