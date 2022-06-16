import React,{useState,useEffect} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {ImSad} from 'react-icons/im'

const Cart = ({openCart,toggleCart,cart,removeFromCart,incrementItem,total }) => {

   

  return (
    <>
     
    <div className={`w-full left-0 fixed h-[100vh]   px-3 top-0  mx-auto py-3 border-6 border-slate-600  flex justify-center items-center transition-all duration-300 ease-linear ${openCart ? 'z-40 bg-[#0000004b]':'' } `}>

       <div className={`w-[96%] md:w-[800px] bg-white h-[60vh] border-t-4 border-t-slate-50 overflow-y-auto mt-[30px] shadow-lg shadow-black relative  transition-all duration-1000 ease-linear ${openCart ? 'translate-y-0':'translate-y-[2000px]'}`}>
       <div className='w-full h-[40px] bg-slate-900  border-b-2 border-slate-50 sticky top-0'>
           <AiFillCloseCircle className='absolute right-2 top-1 text-2xl cursor-pointer text-slate-50' onClick={toggleCart} />
           </div>
               <div className='w-full bg-white py-2 px-2 md:px-3'>
               <h4 className='font-ibm text-xl font-bold mt-2 '>Items in Cart</h4>
               <h6 className='text-sm text-slate-700 font-ibm underline font-bold'>Total - ${total.toFixed(2)}</h6>
               </div>
                
                    {cart.length < 1 && <div className='w-full bg-white py-2 px-2 md:px-3 h-[40vh]'><span className='text-sm inline-block'>Cart is Empty</span> <ImSad className='text-2xl inline-block ml-2'/> </div>}
 
                    {cart.length > 0 && cart.map(item=>(
                    <div key={item.id} className='w-full grid  grid-cols-4 gap-y-4 bg-white px-2 md:px-3'>
                        <div className='border-0 border-slate-500 w-full py-3 text-sm font-ibm flex justify-start items-center'>{item.title.substring(0,10)}</div>
                        <div className='border-0 border-slate-500 w-full text-xs font-ibm py-3 font-bold flex justify-center md:justify-end items-center'>${item.price * item.count}</div>
                        <div className='border-0 border-slate-500 w-full text-xs font-ibm py-3 font-bold flex justify-end items-center'> 
                            <button className='bg-slate-400 text-slate-50 py-1 px-2 mr-1 md:mr-3 text-md shadow-sm shadow-slate-900' onClick={()=>{incrementItem(item.id)}}>+</button>  
                            <div className='shadow-sm shadow-slate-900 px-3 py-1'>{item.count}</div> 
                            <button className='bg-slate-400 text-slate-50 py-1 px-2 ml-1 md:ml-3 text-md shadow-sm shadow-slate-900' onClick={()=>removeFromCart(item.id)}>-</button>
                        </div>
                        <div className='border-0 border-slate-500 w-full py-3 flex justify-end items-center'><img src={item.image} alt="" className='h-[40px]' /></div>
                    </div>
                    ))}
              
          
       </div>
    </div>
    </>
  )
}

export default Cart