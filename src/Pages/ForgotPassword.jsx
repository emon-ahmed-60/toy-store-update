import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';

const ForgotPassword = () => {
    const {user,forgotPassword} = use(AuthContext);
    
    const location = useLocation();
    const { email } = location.state || {};

    
    const handleForgotPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        
        forgotPassword(email).then(()=>{
            toast.success("password reset please check your email")
            window.open("https://mail.google.com", "_blank");
        }).catch(err => toast.error(err.code))
    }
    return (
        <>
         <title>Toy Store - Forgot password</title>   
         <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8'>
            <div className='card-body'>
            <form onSubmit={handleForgotPassword}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              defaultValue={email ? email : user?.email}
              name="email"
            />
            
            <button className="btn btn-neutral mt-4">Reset Password</button>
            
          </fieldset>
         
        </form>
         </div>
         </div>
        </>
    );
};

export default ForgotPassword;