import React from 'react';
import '../App.css';
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineKey } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png'




const LogIn = () => {

    const navigate = useNavigate();

    const saveItem = () => {
        navigate('/Dashboard')
      }

  return (
    <div className='form'>

        <div className='section'>

        <div className='logo'>
            <img src={logo}/>  
        </div>
          
        
            <form>
            
                <h3>User Login</h3>

                <p>Your Email <span>*</span></p>
                
                <div className='input'>
                    <i><HiOutlineMail className='icon'/></i>
                    <input type='email' placeholder='name@example.com'/>
                </div>

                <p>Password <span>*</span></p>
                
                <div className='input'>
                    <i><AiOutlineKey/></i>
                    <input type='password' placeholder='Enter password'/>

                </div>

                <div className='remember'>

                    
                    <label>
                    <input type='checkbox'/>
                    <span style={{marginLeft:'4px', color:'#642b31', fontWeight:600}}>Remember me</span>
                    </label>
                    <span style={{fontWeight:600}}>Forgot password?</span>
                
                </div>

                <div>
                    <input type='submit' value='Sign in' className='submit' onClick={saveItem}/>
                </div>

                <div className='acct'>
                    <span>Don't have an account?</span>
                    <Link to='/SignUp'><span className='sign'>Sign Up</span></Link>
                </div>

                <p className='copy'>© Copyright 2023   Bitixtrader   All Rights Reserved.</p>

                
        
            </form>
        
        </div>
        
    
    </div>
  )
}

export default LogIn