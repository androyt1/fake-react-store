import React,{useState,useEffect} from 'react'
import {BsCartPlus} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Item = ({item,addToCart}) => {

    const[added,setAdded]=useState(false)

    const handleAdded = (item) => {
        setAdded(true)
        addToCart(item)
    }

    useEffect(()=>{        
        setTimeout(()=>{
            setAdded(false)
        },3000)
    },[added])

    

  return (
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
                    <div  className='border-l-2 border-slate-300 relative'>
                    <BsCartPlus className='text-3xl pl-3 cursor-pointer text-slate-500' onClick={()=>handleAdded(item)} />
                    </div> 
                   </div> 
                   <div className={`absolute bottom-3 right-1 w-[80px] bg-sky-900 items-center justify-center transition-all duration-300 ease-in-out ${added ? 'flex':'hidden'}`}><span className='text-xs text-slate-50 font-ibm  py-1 px-1'>Added </span></div>
                </div>
            </div>
  )
}

export default Item