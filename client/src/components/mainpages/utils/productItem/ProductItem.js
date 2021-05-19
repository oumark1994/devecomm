import React from 'react'
import {Link} from 'react-router-dom'
import BtnRender from './BtnRender'
import 'bootstrap/dist/css/bootstrap.css'

function ProductItem({product,isAdmin,deleteProduct,handleCkecked}) {
    // const [loading,setLoading] = useState(false)
    // const deleteProduct = async() =>{
    //     try {
    //         setLoading(true)
    //         const destroyImg = axios.post('/api/destroy',{public_id:product.images.public_id},{
    //             headers:{Authorization:token}
    //         })
    //         const deleteProduct = axios.delete(`/api/products/${product._id}`,{
    //             headers:{Authorization:token}
    //         })
    //         await destroyImg
    //         await deleteProduct
    //         setLoading(false)
    //         setCallback(!callback)
    //     } catch (err) {
    //         alert(err.response.data.msg)
            
    //     }
        
    // }
    // const handleCkecked = () =>{
    //     // console.log(product.checked)
    //     product.checked  = !product.checked
    //     setProduct(product)
    // }
    // if(loading) return <div className="product_card"><Loading/></div>
    return (
        <div className="col-md-4 product_card">
            {isAdmin && <input type="checkbox" onChange={()=>handleCkecked(product._id)} checked={product.checked}></input>}
            <img src={product.images.url} alt=""/>
            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
            <BtnRender product={product} deleteProduct={deleteProduct}/>
          
            
        </div>
    )
}

export default ProductItem
