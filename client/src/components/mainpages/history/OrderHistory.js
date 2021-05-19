import React,{useContext,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'


function OrderHistory() {
    const state = useContext(GlobalState)
    const [history,setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.history
    const [token] = state.token
    
    useEffect(() =>{
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment',{headers:{Authorization:token}})
                // console.log(res)
                setHistory(res.data)

                }else{
                    const res = await axios.get('/user/history',{headers:{Authorization:token}})
                    // console.log(res)
                    setHistory(res.data)

                }
               
            }
            getHistory()
        }
    },[token,isAdmin,setHistory])
    return (
        <div className="history-page">
            <h2>History</h2>
            <h4>You have {history.length}ordered</h4>
                <table>
                    <thead>
                        <tr style={{textAlign:'center'}}><th>Payment ID</th>
                        <th>Date of Purchased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        history.map(items=>(
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                {/* <td>{items._paymentID}</td> */}
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link to={`/history/${items._id}`}>View</Link></td>

                                </tr>
                        ))
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default OrderHistory
