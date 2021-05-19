import React ,{useState,useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/bars-solid.svg'
import Close from './icon/times-solid.svg'
import Cart from './icon/cart.png'
import {NavLink,Link} from 'react-router-dom'
import axios from 'axios'



export default function Header() {
    const state = useContext(GlobalState)
    // console.log(state)
    const [isAdmin] = state.userAPI.isAdmin
    const [isLogged] = state.userAPI.isLogged
    const [cart] = state.userAPI.cart
    const [menu,setMenu] = useState(false)
    const [clicked,setClicked] = useState(false)
    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href="/";
      
    }
    const adminRouter = () =>{
        return(
            <>
            <li><Link to="/create_product">Create Product</Link></li>
            <li><Link to="/category">Category</Link></li>
            </>
        )
      
    }
    const loggedRouter = () =>{
        return(
            <>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
      
    }
    const toggleMenu = () => setMenu(!menu)
    const styleMenu = {
        left:menu ? 0 : "-100%"
    }
    const handleClick = () =>{
        setClicked(!clicked)
    }
    return (
//         <header>
//             <div className="menu">  <img src={Menu} onClick={()=>setMenu(!menu)} width="30"></img>
// </div>
// <div className="logo">
//   <h6><Link to='/'>{isAdmin ? 'Admin' : 'KollaTec'} </Link></h6>  
// </div>
// <ul style={styleMenu}>
// <li><Link to="/">{isAdmin ? 'Home' : 'Home'} </Link></li>
// <li><Link to="/shop">{isAdmin ? 'Products' : 'Shop'} </Link></li>
// <li><Link to="/contact">{isAdmin ? 'Contact' : 'Contact'} </Link></li>
// {isAdmin && adminRouter()}{
//     isLogged ? loggedRouter() :<li><Link to="/login">Login </Link></li>
// }
// {/* {isAdmin && adminRouter()}{
//     isLogged ? loggedRouter() :<li><Link to="/register">Register </Link></li>

// } */}


// <li onClick={()=>setMenu(!menu)}><img src={Close} width="30"  className="menu"></img></li>
// </ul>
// {
//     isAdmin ? ''
//     :<div className="cart-icon">
//     <span>{cart.length}</span>
//     <Link to="/cart"><img src={Cart} width="30"></img></Link> 
// </div> 
// }


//        </header>

<nav>
    <div className="logo">
        Kolla<font>Tec</font>
    </div>
    <div className="menu-icon" onClick={handleClick}>
        <i className={clicked? "fa fa-times" : "fa fa-bars"}></i>
    </div>
    <ul className={clicked ? "menu-list" : "menu-list close" }>
    <li ><Link to="/" exact activeClassName="active">{isAdmin ?'Home':'Home'}</Link></li>
    <li ><NavLink to="/shop" exact activeClassName="active">{isAdmin ? 'Shop' : 'Shop'} </NavLink></li>
    
    {isAdmin && adminRouter()}{
     isLogged ? loggedRouter() :<li ><NavLink to="/login" exact activeClassName="active">Login</NavLink></li>
}
<li ><NavLink to="/contact" exact activeClassName="active">{isAdmin ? 'Contact' : 'Contact'}</NavLink></li>

{
    isAdmin ? ''
    :<div className="cart-icon">
    <span>{cart.length}</span>
    <li>
    <NavLink to="/cart"  exact activeClassName="active"><img  src={Cart} width="30"></img></NavLink></li> 
</div> 
}
    
    </ul>
</nav>


    )
}
