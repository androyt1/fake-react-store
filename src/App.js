import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route }  from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import axios from './helpers/apiClient'
import Details from './pages/Details'

const App = () => { 
 
const[showLoading,setShowLoading]=useState(false)

const[items,setItems] = useState([])
const[backup,setBackUp]=useState([])
   
    const[isLoading,setIsLoading] = useState(true)
  
    const[error,setError] = useState(null)

    useEffect(()=>{  
        fetchProducts()
    },[]) 

   
   
 

    const fetchProducts = () => {
      setShowLoading(true)
        const res=axios.get('/products')
        .then(res=>{
            setItems(res.data)
            setBackUp(res.data)
            setIsLoading(false)
            setShowLoading(false) 
        })
        .catch(err=>{ 
            setError(err)
            setIsLoading(false)
        })
    }
    //fetchProducts by category
    const fetchProductByCategory = (category) => {
           if(category==='all'){
        setItems(backup)
      }else{
      setItems(backup.filter(item=>item.category===category))
      }
    }

    const[cart,setCart]=useState([])
    //add to cart
    const addToCart = (item) => {
        // check if item already in cart
        const itemInCart = cart.find(itemInCart => itemInCart.id === item.id)       
        if(!itemInCart){
          setCart([...cart,item])     
        }
       else{
            setCart(cart.map(itemInCart => itemInCart.id === item.id ? {...itemInCart,count:itemInCart.count+1} : itemInCart))    
       }     
    }   
 

    //remove from cart
    const removeFromCart = (id) => { 
      const itemInCart = cart.find(itemInCart => itemInCart.id === id)
      if(itemInCart.count > 1){
        setCart(cart.map(itemInCart => itemInCart.id === id ? {...itemInCart,count:itemInCart.count-1} : itemInCart))    
        // setCart([...cart])
      }
       else{
        setCart(cart.filter(item=>item.id!==id))
       }
    }
    //clear cart
    const clearCart = () => {
        setCart([])
    }
   
    //search products
    const[search,setSearch] = useState('')
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }    
   
    
    useEffect(()=>{  
      let results=[]         
      if(search.length > 0){
        results=items.filter(item=>item.title.toLowerCase().startsWith(search.toLowerCase()) || item.title.toLowerCase().includes(search.toLowerCase()) )             
      } 
      if(search.length === 0 || search=== null || search=== undefined || search === ''){
        results=backup
      }
      setItems(results)
    },[search])
   
    const[openCart,setOpenCart] = useState(false)

    const toggleCart = () => {
        setOpenCart(prevState=>!prevState)
    }

    const incrementItem = (id) => {
        setCart(cart.map(item=>item.id===id ? {...item,count:item.count+1} : item))
    }

    const addition=(acc,currentValue)=>{
      return acc + currentValue.count * currentValue.price 
  }
  const total=cart.reduce(addition,0)

  return (
    <BrowserRouter>
    <Navbar search={search} handleSearch ={handleSearch} cart={cart} openCart={openCart} toggleCart={toggleCart} removeFromCart={removeFromCart } incrementItem={incrementItem} total={total} />
    <Routes>
      <Route path="/" element={<Home items={items} isLoading={isLoading}  fetchProductByCategory={fetchProductByCategory} fetchProducts={fetchProducts} addToCart={addToCart} showLoading={showLoading} />}/>
      <Route path="/details/:id" element={<Details addToCart={addToCart} showLoading={showLoading}/>}/>
    </Routes>
    </BrowserRouter>
  )
} 

export default App