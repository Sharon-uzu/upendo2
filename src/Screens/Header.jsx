import React, { useState } from 'react';
import '../App.css';
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";



const Header = () => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
    
  return (
    <div className='header'>
        <section>

        
            <div className='nav1'>
            
                
                <button type='button' style={{backgroundColor:'#fff', color:'#642b31'}}>Fund your account</button>
                <button type='button' style={{backgroundColor:'#fff', color:'#642b31'}}>Withdraw Funds</button>
            </div>
        

            <div className='nav2'>
            

               <FaLayerGroup className='icon'/><span className='icon-group' onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}>KYC</span>

               <div className='dropdown kyc'>

                <div className={`drop ${open1 ? 'active' : 'inactive'}`} style={{cursor:'pointer'}}>
                  
                    
                    <h1 className='ver'>KYC verification <br/> <span>KYC status:</span></h1>
                    <button style={{backgroundColor:'#31ce36'}}>Verify Account</button>
                    
              
                    
                
                </div>
              
              </div>

              
              <FaUser className='icon' onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}/>
             
              <div className='dropdown'>

                <div className={`drop ${open ? 'active' : 'inactive'}`}>
                  
                    <h4>Sharon Uzu</h4>
                    <p>sharon@gmail.com</p>
                    <button>Account settings</button>
                    <h5>Deposit</h5>
                    <h5>Withdraw</h5>
                    <h5>Buy Plan</h5>
                    <h6>Logout</h6>
              
                    
                
                </div>
              
              </div>
              
                  
            </div>

        </section>
    </div>
  )
}

export default Header