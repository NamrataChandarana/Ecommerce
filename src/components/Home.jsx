import React from 'react'
import { useState } from 'react'
import { categories } from '../constant'
import { products } from '../constant'
import {Rating} from  '@mui/material';
import { Pagination } from '@mui/material';
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import { useRef } from 'react';
import { useEffect } from 'react';

// import {ArrowBackIcon} from '@mui/icons-material';


const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedCat, setSelectedCat] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);
  // const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const productRef = useRef();

  // useEffect(()=>{
  //   products.map((product) => (selectedCat.name == product.category ? setSelectedProduct(product) : null))

  // //   if(selectedProducts.length > 0){
  // //     setSelectedProduct(selectedProducts)
  // //   }
  //   console.log(selectedProduct)
  // },[selectedCat])

 

  function handleSelect(subItem){
    const existingIndex = selectedCat.findIndex(item =>
      item.name === subItem.name 
    );
    if (existingIndex !== -1) {
      const newSelectedCat = [...selectedCat];
      newSelectedCat.splice(existingIndex, 1);
      setSelectedCat(newSelectedCat);
    } else {
      setSelectedCat([...selectedCat, subItem]);
  }
}

  

  const handleMouseEnter = (imgUrl) => {
    setHoveredImage(imgUrl);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  
function handleClose(item){
  const existingIndex = selectedCat.findIndex(category =>
    category.name === item.name 
  );
  
  if (existingIndex !== -1) {
    const newSelectedCat = [...selectedCat];
    newSelectedCat.splice(existingIndex, 1);
    setSelectedCat(newSelectedCat);
  } else {
    setSelectedCat([...selectedCat, subItem]);
}

}

  const toggleCategoryExpand = (index) => {

    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  }

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

        <div className=' max-lg:hidden col-span-1 m-5'>
        {selectedCat.length > 0 ? (
          <div>
              <div className='flex text-sm justify-between pr-4'>
                <p>REFINE BY</p>
                <button onClick={() => setSelectedCat([])}>Clear All</button>
              </div>
              <div className='text-sm ' >
                {selectedCat.map((item, index) => (
                  <div className='flex justify-between'>
                    <div>
                      <p>Collections: {item.name}</p>
                    </div>
                    <img src="navicon/close.svg" alt="" width="10px" height="10px" onClick={()=> handleClose(item)}/>
                  </div>
                ))}
              </div>
          </div>
          
          
        ) : (
          null
        )}
            {categories.map((item,index)=>(
              <div className=''>
                <div onClick={()=>toggleCategoryExpand(index)} className="border-b-2  border-lightgray-[2px]">
                <h4 key={index} className="my-[1rem] " >{item.name}</h4>
              </div>
                {expandedIndex === index   && item.subCategoies && (
                  <div>
                    {
                      item.subCategoies.map((subItem,index) =>(
                        <div>
                            <input type="checkbox" name={subItem.name} id="" onChange={()=> handleSelect(subItem)}  checked={selectedCat.includes(subItem) ? true : false}/>
                            <label  className="p-[.5em]">{subItem.name}</label>
                        </div>
                        
                      ))
                    }
                  </div>
                )}
              </div>
              
              
            )) }
        </div>
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
          <div className='grid grid-cols-4' ref= {productRef}>
              {
                products?.map((product)=>(
                  <div className=' flex flex-col mx-[1rem] text-xs font-mono'  >
                      <img src={hoveredImage === product.hoverImg ? product.hoverImg : product.img} alt="img" width="1000px" height="200px" onMouseLeave={handleMouseLeave} onMouseEnter={()=>  handleMouseEnter(product.hoverImg)} />
                      <p className='p-[2px] text-xs'>{product.name}</p>
                      <Rating name="size-small" defaultValue={product.reviews} size="small" />
                      <p className='p-[2px]'>{product.reviews} reviews</p>
                      <p className='p-[2px]'>Rs. {product.reupees}</p> 
                      <p className='p-[2px]'>{product.size.join(" ")}</p>

                  </div>
                ))
              }
          </div>
          <Pagination count={10} size="small" className='flex place-content-center my-[3rem]'/>
        </div>
        
      </main>
    </>
  )
}
export default Home