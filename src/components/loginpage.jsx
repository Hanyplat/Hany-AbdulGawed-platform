import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const LoginPage =()=>{
    const { loginWithRedirect } =useAuth0();
    const { logout } =useAuth0();
    const {user} =useAuth0();

    
    return(
    <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
    </div>
    );
    
    
}

export default LoginPage