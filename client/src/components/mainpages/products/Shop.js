import React ,{useContext,useEffect,useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import 'bootstrap/dist/css/bootstrap.css'
import Loading from '../loading/Loading'
import axios from 'axios'
import Filter from './Filter'
import LoadMore from './LoadMore'
import Footer from './Footer'


export default function Shop() {
    const state = useContext(GlobalState)
    const [products,setProducts] = state.ProductsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback,setCallback] = state.ProductsAPI.callback
    const [loading,setLoading] = useState(false)
    const [isCheck,setIsCheck] = useState(false)
  
    useEffect(()=>{
        const getProducts = async()=>{
            const res = await axios.get('/api/products')
            // console.log(res.data.products)
            setProducts(res.data.products)
        }
        getProducts()
    },[setProducts])
     console.log(products)
    const deleteProduct = async(id,public_id) =>{
        console.log({id,public_id})
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy',{public_id},{
                headers:{Authorization:token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`,{
                headers:{Authorization:token}
            })
            await destroyImg
            await deleteProduct
           
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
            
        }
        
    }
    const handleCkecked = (id) =>{
        products.forEach(product =>{
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
   
     }
     const checkAll = () =>{
         products.forEach(product=>{
             product.checked = !isCheck
         })
         setProducts([...products])
         setIsCheck(!isCheck)
     }
     const deleteAll = () =>{
         products.forEach(product =>{
             if(product.checked) deleteProduct(product._id,product.images.public_id)
         })
     }
     if(loading) return <div><Loading/></div>
    return (
        <>
        <Filter/>
        {
            isAdmin &&
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll}></input>
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        }
        <div className="container-fluid">
        <div className="row">
            {
                products.map(product =>{
                    return <ProductItem key={product._id} product={product} deleteProduct={deleteProduct} handleCkecked={handleCkecked}  isAdmin={isAdmin}/>
                })
            }
        </div>
        </div>
        <LoadMore/>
        {products.length === 0 && <Loading/>}
        <Footer/>
        </>
    )
}
