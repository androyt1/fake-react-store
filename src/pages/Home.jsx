import React from 'react'
import LoadingScreen from '../components/LoadingScreen';
import Item from '../components/Item';

const Home = ({items,fetchProductByCategory,fetchProducts,addToCart,showLoading}) => { 


  return (
    <div className='relative z-[5] bg-slate-white'><nav className='w-full  md:flex md:justify-center md:items-center py-2 shadow-sm shadow-black sticky top-0 z-10 bg-slate-900'>

            <ul className='items-center font-frank grid grid-cols-2 md:grid-cols-5 place-items-center'>
                <li className='inline-block mr-5 text-slate-50 font-ibm text-sm '><button className='  font-ibm text-sm' onClick={()=>fetchProductByCategory('all')}>All Products</button> </li>
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
        {items && items.map(item=>(
            item.count=1,           
            <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
    </div> 
    <LoadingScreen  showLoading={showLoading}/>
    </div>
  )
}

export default Home