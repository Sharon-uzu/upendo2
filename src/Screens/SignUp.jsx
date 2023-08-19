import React from 'react'
import '../App.css';
import { Logo } from '../Components/logo';
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineKey } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineLocationMarker} from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const SignUp = () => {

    const navigate = useNavigate();

    const saveItem = () => {
        navigate('/')
      }


  return (
    <div className='form'>

        <div className='section'>

            <div className='logo'>
                <Logo />  
            </div>
          
        
            <form>
            
                <h3>Create An Account</h3>

                <p>Username <span>*</span></p>
                
                <div className='input'>
                    <i><BiUserCircle className='icon'/></i>
                    <input type='text' placeholder='Unique username'/>
                </div>

                <p>FullName <span>*</span></p>
                
                <div className='input'>
                    <i><BiUserCircle className='icon'/></i>
                    <input type='text' placeholder='Full name'/>
                </div>

                <p>Your Email <span>*</span></p>
                
                <div className='input'>
                    <i><HiOutlineMail className='icon'/></i>
                    <input type='email' placeholder='name@example.com'/>
                </div>

                <p>Phone Number <span>*</span></p>
                
                <div className='input'>
                    <i><BsFillTelephoneFill className='icon'/></i>
                    <input type='tel' placeholder='Phone number'/>
                </div>

                <p>Password <span>*</span></p>
                
                <div className='input'>
                    <i><AiOutlineKey/></i>
                    <input type='password' placeholder='Enter password'/>

                </div>

                <p>Confirm Password <span>*</span></p>
                
                <div className='input'>
                    <i><AiOutlineKey className='icon'/></i>
                    <input type='password' placeholder='Confirm password'/>
                </div>

                <p>Country <span>*</span></p>
                
                <div className='input'>
                    <i><HiOutlineLocationMarker className='icon'/></i>
                    <select>
                        <option value=''></option>
                        <option value='1'>Albania</option>
                        <option value='2'>Algeria</option>
                        <option value='3'>Angola</option>
                        <option value='4'>Belgium</option>
                        <option value='5'>Benin</option>
                        <option value='6'>Chile</option>
                        <option value='7'>China</option>
                        <option value='8'>Cuba</option>
                        <option value='9'>Egypt</option>
                        <option value='10'>Nigeria</option>
                        
                    </select>
                </div>

                <p>Referral ID <span>*</span></p>
                
                <div className='input'>
                    <i><BiUserCircle className='icon'/></i>
                    <input type='text' placeholder='optional referral id'/>
                </div>


                <div className='remember'>

                    
                    <label>
                    <input type='checkbox'/>
                    <span style={{marginLeft:'4px', color:'#0b65c6', fontWeight:600}}>I Accept The Terms And privacy Policy</span>
                    </label>
                
                </div>

                <div>
                    <input type='submit' value='Register' className='submit' onClick={saveItem}/>
                </div>

                <div className='acct'>
                    <span>Already have an account?</span>
                    <Link to='/'><span className='sign' >Log in</span></Link>
                </div>

                <p className='copy'>© Copyright 2023   Bitixtrader   All Rights Reserved.</p>

                
        
            </form>
        
        </div>
        
    
    </div>
  )
}

export default SignUp