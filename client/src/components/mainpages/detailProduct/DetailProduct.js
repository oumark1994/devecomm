import React,{useContext,useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import{GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Footer from '../products/Footer'

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.ProductsAPI.products
    const [detailProduct,setDetailProduct] = useState([])
    const addCart = state.userAPI.addCart
    useEffect(()=>{
        if(params.id){
            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
                
            });
        }
    },[params.id,products])
    // console.log(detailProduct)

    if(detailProduct.length === 0) return null;
    return (
        <>
        <div className="detail">
            <img src={detailProduct.images.url} alt=""></img>
            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.title}</h2>
                    <h6>#ID:{detailProduct.product_id}</h6>
                    <h6>{detailProduct.description}</h6>
                    
                </div>
                <span>${detailProduct.price}</span>
                <p>{detailProduct.description}</p>
                <p>{detailProduct.conten}</p>
                <p>Sold:{detailProduct.sold}</p>
                <Link to="!#" id="btn_buy" onClick={()=>addCart(detailProduct)} className="cart">Buy Now</Link>
            </div>
        </div>
        <h5 className="text-center text-uppercase">Related Products</h5>
        <div className="products row" >

            {
                products.map(product =>{
                    return product.category === detailProduct.category 
                   ? <ProductItem key={product._id} product={product}/>:null
                })
            }

        </div>
        <Footer/>

        </>
    )
}

export default DetailProduct
