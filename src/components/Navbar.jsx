import React from 'react'
import {AiOutlineShoppingCart,AiOutlineHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BsSearch,BsShopWindow} from 'react-icons/bs'
import Cart from './Cart'
const Navbar = ({search,handleSearch,searchProducts,cart,openCart,toggleCart,removeFromCart,incrementItem,total }) => {   
       
  return (
    <div className='relative'>
   <div className='w-full sticky top-0 bg-slate-900 h-[60px] md:h-[50px]  flex justify-between items-center px-2 md:px-4  font-frank z-20'>
        <div>
            <Link to='/'><BsShopWindow className='md:hidden text-2xl text-slate-50 mr-2'/> <span className='hidden md:block text-md font-semibold text-slate-50 font-ibm'>Fake Store</span></Link>
        </div>  
        <div className='w-full md:w-[40%] flex justify-center items-center'><input type="search" className='bg-slate-100 px-1 w-full focus:border-none focus:bg-slate-200 focus:outline-none' value={search}  name="search" onChange={handleSearch } /><BsSearch className='hidden md:block text-2xl cursor-pointer ml-2 text-slate-300' onClick={()=>searchProducts(search)}/></div>       
       <nav>
        <ul className='font-frank text-sm flex items-center relative'>
            <li className='inline-block mr-2 md:mr-4 font-md font-ibm font-semibold'><Link to='/'><AiOutlineHome className='text-2xl text-slate-300 ml-2'/></Link></li>
            <li className='inline-block relative'> </li>
        </ul>
       </nav>
   </div>
   <div className='flex justify-center items-center cursor-pointer fixed lg:top-[45px] right-0 top-[75px] md:top-[45px] lg:right-[80px] z-50 bg-black py-2 px-1' onClick={toggleCart}><span className='text-xs  font-ibm translate-x-[0px] font-bold bg-slate-900 px-1 text-slate-50 translate-y-[-10px]'>{cart.length}</span><AiOutlineShoppingCart className='text-2xl text-slate-200'/></div>

      <Cart cart={cart} openCart={openCart} toggleCart={toggleCart} removeFromCart={removeFromCart} incrementItem={incrementItem} total={total}/> 
   </div>
  )
}

export default Navbar