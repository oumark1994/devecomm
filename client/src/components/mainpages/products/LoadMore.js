import React,{useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page,setPage] = state.ProductsAPI.page
    const [result] = state.ProductsAPI.result
    return (
        <div className="load_more">
            {
                result < page * 6 ? ""
                :<button className="btn  btn-lg  text-center" onClick={()=>setPage(page+1)}>Load more</button>
            }

            
        </div>
    )
}

export default LoadMore
