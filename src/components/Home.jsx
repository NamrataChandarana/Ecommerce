import React from 'react'
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import Sidebar from './Sidebar';
import Products from './Products';

// import {ArrowBackIcon} from '@mui/icons-material';


const Home = () => {
  // const [selectedProduct, setSelectedProduct] = useState([]);


  function handleLayout4(){
    productRef.current.className ="grid grid-cols-4"
  }
  function handleLayout3(){
    productRef.current.className ="grid grid-cols-3"
  }
  function handleLayout2(){
    productRef.current.className ="grid grid-cols-2"
  }
  return (
    <>
      <main className='grid grid-cols-5 my-[5rem] ml-[2.5rem]'>
      <Sidebar/>
        
        <div className='col-span-4'>
          <div>
            <input type="text"  width="100px"/>
            <div className='flex gap-2 m-[1rem]'>
              <p className='font-mono text-sm'>View As</p>
              <TfiLayoutColumn2Alt onClick={handleLayout2} className="border-black-5"/>
              <TfiLayoutColumn3Alt onClick={handleLayout3} />
              <TfiLayoutColumn4Alt onClick={handleLayout4} />
            </div>
          </div>
          <Products/>
        </div>
        
      </main>
    </>
  )
}
export default Home