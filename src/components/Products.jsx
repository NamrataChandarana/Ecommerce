import React from 'react'
import { products } from '../constant'
import { useRef } from 'react';
import {Rating} from  '@mui/material';
import { Pagination } from '@mui/material';
import { useState } from 'react';

const Products = () => {

  const [hoveredImage, setHoveredImage] = useState(null);
  const productRef = useRef();

  const handleMouseEnter = (imgUrl) => {
    setHoveredImage(imgUrl);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
  return (
    <>
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
    </>
  )
}

export default Products