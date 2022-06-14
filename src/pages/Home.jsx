import React from 'react'
import {BsCartPlus} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

const Home = ({items,isLoading,fetchProductByCategory,fetchProducts,addToCart}) => { 


  return (
    <div className='relative z-[5] bg-slate-white'><nav className='w-full  md:flex md:justify-center md:items-center py-2 shadow-sm shadow-black sticky top-0 z-10 bg-slate-900'>

            <ul className='items-center font-frank grid grid-cols-2 md:grid-cols-5 place-items-center'>
                <li className='inline-block mr-5 text-slate-50 font-ibm text-sm '><button className='  font-ibm text-sm' onClick={()=>fetchProducts()}>All Products</button> </li>
                <li className='inline-block mr-5 text-slate-50 font-ibm text-sm '><button className='  font-ibm text-sm' onClick={()=>fetchProductByCategory('electronics')}>Electronics</button> </li>
                <li className='inline-block mr-5 text-slate-50 font-ibm text-sm '><button className='  font-ibm text-sm' onClick={()=>fetchProductByCategory('jewelery')}>Jewelery</button> </li>
                <li className='inline-block mr-5 text-slate-50 font-ibm text-sm '><button className='  font-ibm text-sm' onClick={()=>fetchProductByCategory("men's clothing")}>Men's clothing</button> </li>
                <li className='inline-block mr-5 text-slate-50 font-ibm text-sm '><button className='  font-ibm text-sm' onClick={()=>fetchProductByCategory("women's clothing")}>Women's clothing</button> </li>

        {/* {categories && categories.map((category,index)=>(
            <li className='inline-block mr-6 text-slate-900 font-ibm text-md' key={index}><button onClick={()=>fetchProductByCategory(category)}>{category}</button> </li>
        ))}

        <li className='inline-block ml-16'></li> */}
    </ul>
        
    
</nav>
    <div className='w-full bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 place-items-center px-4 py-3 mt-8 relative z-[5]'>
        {isLoading && <div>Loading products ...please wait</div>}
        {items && items.map(item=>(
            item.count=1,           
            <div key={item.id} className='w-full'> 
                <div className='w-full bg-white px-3   flex flex-col justify-center items-center shadow-md shadow-[#000000c5] relative z-[5]'>
                    <span className='block  w-[60%] py-1 text-slate-900 text-center uppercase font-ibm font-semibold  text-md mb-2'>{item.title.substring(0,12)}</span>                    
                    {/* <span className='block'>{item.category}</span> */}
                    {/* <span className='block'>{item.description}</span> */}
                  <Link to={`/details/${item.id}`}>
                    {/* <img src={item.image} alt="" className='h-[40vh] md:h-[30vh] object-cover py-2'/> */}
                    <LazyLoadImage
                    alt={item.title}    
                    effect="blur"               
                    src={item.image} // use normal <img> attributes as props
                    className='h-[40vh] md:h-[30vh] object-cover py-2'/>
                    </Link>
                   <div className='flex justify-center items-center border-0 border-slate-400 py-0 px-2 mb-2'>
                    <div className='border-r-0 border-slate-600 '>
                    <span className='block pr-3 text-slate-900 font-ibm text-xs font-bold'>${item.price}</span>
                    </div>
                    <motion.div onTap={{backgroundColor:'green'}} className='border-l-2 border-slate-300 relative'>
                    <BsCartPlus className='text-3xl pl-3 cursor-pointer text-slate-500' onClick={()=>addToCart(item)}/>
                    </motion.div>
                   </div> 
                </div>
            </div>
        ))}
    </div> 
    </div>
  )
}

export default Home