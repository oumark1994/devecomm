import React,{useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filter() {
    const state = useContext(GlobalState)
    // const [products,setProducts] = state.CategoriesAPI.categories
    const [category,setCategory] = state.ProductsAPI.category
    const [categories] = state.CategoriesAPI.categories
    const [sort,setSort] = state.ProductsAPI.sort
    const [search,setSearch] = state.ProductsAPI.search
    const  handleCategory = e =>{
        setCategory(e.target.value)
        setSearch('')
    }
    return (
        <div className="filter_menu hello">
            <div className="row ">
                <div className="col-6">
                {/* <span>Filters:</span> */}
                <select name="category" value={category} onChange={handleCategory}>
                    <option value=''>All Calegories</option>
                    {
                        categories.map(category =>(
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>

                         )  )
                    }
                </select>
            </div>
            </div>
            <div className="col-6">
            <input type="text" value={search} placeholder="Enter your search!"
            onChange={e =>setSearch(e.target.value.toLowerCase())}></input>
             {/* <div className="row">
                <span>Sort By:</span>
                <select value={sort} onChange={e =>setSearch(e.target.value)}>
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price:Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                  
                </select>
            </div> */}

</div>
        </div>
    )
}

export default Filter
