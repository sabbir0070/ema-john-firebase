import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Inventory = () => {
const{ user,loading} = useContext(AuthContext);
// console.log(user)
if(loading){
return <h2>Loading.....</h2>
}

    return (
        <div>
            <h3>Inventory page {user&& <span>{user.email}</span>} </h3>
        </div>
    );
};

export default Inventory;