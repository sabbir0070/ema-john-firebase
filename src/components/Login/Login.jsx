import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [show, setShow] = useState(false);
const {SignInUser} = useContext(AuthContext);
// Search from current location
const navigate = useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || "/";


const handleSignIn = (event)=>{
event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;
console.log(from)
// console.log(name, email, password)
setError('');
setSuccess('');

SignInUser(email, password)
.then(result=>{
const loggedUser = result.user;
// console.log(loggedUser);
setSuccess('Login Successful')
form.reset();
navigate(from,{replace:true});
})
.catch(error=>{
console.log(error.message)
setError(error.message)
})

}

    return (
        <div className='form-container'>
            <h2>Login Please</h2>
<form onSubmit={handleSignIn}>
<div className='form-control'>
<label htmlFor=''> Email</label>
<input type="email" name="email" placeholder='Your Email' id="email" required/>
</div>
<div className='form-control'>
<label htmlFor=''> Password</label>
<input type={show ? "text" : "Password"} name="password" placeholder='Your Password' id="password" required />
<p onClick={()=>setShow(!show)}><small>
{
show ? <span>Hide Password</span> : <span>Show Password</span>
}

</small></p>
</div>
<div className='form-submit'>
<input type="submit" value="Login" />
</div>
<p className='text-p'>
<Link className='text-blue' to="/register">If your are New User? Please Sign In.</Link>
</p>
<p className='text-p'><span className='text'>{error}</span></p>
<p className='text-p'><span className='text-success'>{success}</span></p>
</form>
        </div>
    );
};

export default Login;