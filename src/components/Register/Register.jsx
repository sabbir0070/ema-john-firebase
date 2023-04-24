import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const {createUser} = useContext(AuthContext);
// console.log(createUser)
const handleSignUp = (event)=>{
event.preventDefault();
const form = event.target;
const name = form.name.value;
const email = form.email.value;
const password = form.password.value;
// console.log(name, email, password)
setError('');
setSuccess('');

createUser(email,password)
.then(result=>{
const loggedUser = result.user;
console.log(loggedUser)
setSuccess('Create A New Account Successful')
})
.catch(error=>{
setError(error.message);
console.log(error.message)
})

}

  return (
    <div className='form-container'>
      <h2>Register Please</h2>
<form onSubmit={handleSignUp}>
<div className='form-control'>
<label htmlFor=''> Your Name</label>
<input type="text" name="name" placeholder='Your Name' id="name" required/>
</div>
<div className='form-control'>
<label htmlFor=''> Email</label>
<input type="email" name="email" placeholder='Your Email' id="email" required/>
</div>
<div className='form-control'>
<label htmlFor=''> Password</label>
<input type="Password" name="password" placeholder='Your Password' id="password" required />
</div>
<div className='form-submit'>
<input type="submit" value="Login" />
</div>
<p className='text-p'>
<Link className='text-blue' to="/login">Already have an account? Please Login.</Link>
</p>
<p className='text-p'><span className='text'>{error}</span></p>
<p className='text-p'><span className='text-success'>{success}</span></p>

</form>
    </div>
  );
};

export default Register;