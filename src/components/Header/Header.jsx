import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
const {user,logOut} = useContext(AuthContext);
// console.log(user)

const handleLogOut = () =>{
logOut()
.then(()=>{})
.catch(error=>{
console.log(error.message)
})
}
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                {user&& <Link to="/inventory">Inventory</Link>}
                <Link to="/login">Login</Link>
                <Link to="/register">Sign up</Link>
{
user ? <> <span className='text'>{user?.email}</span>
 <button onClick={handleLogOut} >Sign out</button> </>:
 <button><Link to="/login">Sign in</Link> </button>
}            

</div>
        </nav>
    );
};

export default Header;