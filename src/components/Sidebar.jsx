import React from 'react'
import { categories } from '../constant'
import { useState } from 'react';

const Sidebar = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [selectedCat, setSelectedCat] = useState([]);
    // const [selectedProduct, setSelectedProduct] = useState([]);

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
  return (
    <>
        <div className=' max-lg:hidden col-span-1 m-5'>
        {selectedCat.length > 0 ? (
          <div>
              <div className='flex text-sm justify-between pr-4'>
                <p>REFINE BY</p>
                <button onClick={() => setSelectedCat([])}>Clear All</button>
              </div>
              <div className='text-sm ' >
                {selectedCat.map((item, index) => (
                  <div key={index} className='flex justify-between'>
                    <div>
                      <p >Collections: {item.name}</p>
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
              <div className='' key={index}>
                <div onClick={()=>toggleCategoryExpand(index)} className="border-b-2  border-lightgray-[2px]">
                <h4  className="my-[1rem] " >{item.name}</h4>
              </div>
                {expandedIndex === index   && item.subCategoies && (
                  <div>
                    {
                      item.subCategoies.map((subItem,index) =>(
                        <div key={index}>
                            <input  type="checkbox" name={subItem.name} id="" onChange={()=> handleSelect(subItem)}  checked={selectedCat.includes(subItem) ? true : false}/>
                            <label  className="p-[.5em]">{subItem.name}</label>
                        </div>
                        
                      ))
                    }
                  </div>
                )}
              </div>
              
              
            )) }
        </div>
    </>
  )
}

export default Sidebar