import React,{useContext,useEffect, useState} from 'react'
import axios from 'axios'
import Loading from '../loading/Loading'
import { GlobalState } from '../../../GlobalState'
import {useHistory,useParams} from 'react-router-dom'
const initialState = {
    product_id:'',
    title:'',
    price:0,
    description:'How to and tutorial videos of cool css effect,Web Design ideas, Javascript libraries,Node.',
    content:'Welcome to our channel Dev AT.Here you can learn web designing,UI/UX designing.',
    category:'',
    _id:''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product,setProduct] = useState(initialState)
    const [categories] = state.CategoriesAPI.categories
    const [images,setImages] = useState(false)
    const [loading,setLoading] = useState(false)
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const history = useHistory()
    const param = useParams()
    const [products] = state.ProductsAPI.products
    const [onEdit,setOnEdit] = useState(false)
    const [callback,setCallbact] = state.ProductsAPI.callback
    useEffect(()=>{
        if(param.id){
            setOnEdit(true)
            products.forEach(product =>{
                if(product._id === param.id) {
                setProduct(product)
                setImages(product.images)
                }
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    },[param.id,products])
    
        const handleDestroy = async () =>{
            try {
                if(!isAdmin) return alert('You are not an admin')
                setLoading(true)
                await axios.post('/api/destroy',{public_id:images.public_id},{
                    headers:{Authorization:token}
                })
                setLoading(false)
                setImages(false)
                
            } catch (err) {
                alert(err.response.data.msg)
                
            }
        }
        const handleChangeInput = e =>{
            const {name,value} = e.target
            setProduct({...product,[name]:value})
        }
        const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]
            // console.log(file)
            if(!file) return alert("File not exist.")
            if(file.size > 10240 * 10240) return alert("Size too large !")   
            if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') return alert("File format is incorrect.")    
            
            let formData = new FormData()
            formData.append('file',file)
            setLoading(true)
            const res = await axios.post('/api/upload',formData,{
                headers:{'content-type':'multipart/form-data',Authorization:token}
            })
            setLoading(false)
            console.log(res) 
            setImages(res.data)
            
        } catch (err) {
            alert(err.response.data.msg)
            
        }
    }
    const syleUpload ={
        display:images ? "block":"none"
    }
    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You are not an admin")
            if(!images) return alert("No Images upload")
            if(onEdit){
                await axios.put(`/api/products/${product._id}`,{...product,images},{
                    headers:{Authorization:token}
                })
            }else{
            await axios.post('/api/products',{...product,images},{
                headers:{Authorization:token}
            })
        }
        setCallbact(!callback)
            setImages(false)
            setProduct(initialState)
         
            history.push("/")
            
        } catch (err) {
            alert(err.response.data.msg)
            
        }
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" onChange={handleUpload} id="file_up"/>
                {
                    loading ? <div id="file_img">Loading</div>
                    :<div id="file_img" style={syleUpload}>
                    <img src={images ? images.url : ''} alt=""></img>
                    <span onClick={handleDestroy}>X</span>
                </div>
                }
                
                
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" disabled={onEdit} onChange={handleChangeInput} value={product.product_id} required></input>
                     
                </div>
                <div className="row">
                    <label htmlFor="product_id">Title </label>
                    <input type="text" name="title" id="title"  onChange={handleChangeInput} value={product.title} required></input>
                     
                </div>
                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price"  onChange={handleChangeInput} value={product.price} required></input>
                     
                </div>
                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea rows="5" name="description" id="description"  onChange={handleChangeInput} value={product.description} required></textarea>
                     
                </div>
                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea rows="7" type="text" name="content"  onChange={handleChangeInput} id="content" value={product.content} required></textarea>
                     
                </div>
                <div className="row">
                    <label htmlFor="categories">Categories:</label>
                    <select name="category" value={product.category}  onChange={handleChangeInput}>
                        <option value="">Please select a category</option>
                        {
                            categories.map(category =>(
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                     
                </div>
                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>

            
        </div>
    )
}

export default CreateProduct
