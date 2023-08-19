import React, { useState } from 'react';
import '../App.css';
import {AiFillHome } from "react-icons/ai";
import {FaWallet } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import {BsCurrencyBitcoin } from "react-icons/bs";
import {CgMenuGridO } from "react-icons/cg";
import {FaCubes } from "react-icons/fa";
import {FaUsers } from "react-icons/fa";
import {IoIosFootball } from "react-icons/io";
import {BiSolidDownArrow} from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import UserRequest from '../Screens/UserRequest';
import logo from '../Assets/logo2.png'
import logo2 from '../Assets/logo.png'




const SideBar = () => {


  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const [open1, setOpen1] = useState(false);
  

  return (
    <div>
      
    
      
      <FaBars className='media-bar'  onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/>
      

      <div className='side' style={{width:isOpen ? "70px" : "250px"}}>

      <div className='bar' >
        
        <div className='logo-div' style={{display:isOpen ? "none" : "block"}}>
            <img src={logo}/>
        </div>
        
        <FaBars className='icon' onClick={toggle} style={{cursor:'pointer'}}/>
      
      </div>

      <div className='name' style={{display:isOpen ? "none" : "flex"}}>
        <div onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}>
          <h4>Sharon Uzu</h4>
          <BiSolidDownArrow className='icon'/>
        </div>
          

          <h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Account Setting</h3>

        </div>
        

        
      <NavLink to='/Dashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

        </div>
      
      </NavLink>

      <NavLink to='/Send' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaUsers className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Send Message</h4>

        </div>
      
      </NavLink>

      <NavLink to='/UserRequest' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaUsers className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>User Requests</h4>

        </div>
      
      </NavLink>


      <NavLink to='/AssignOfficer' className='link' activeclassName = 'active'>
      
        <div>
        
          <BsBarChartFill className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Assign Officer</h4>

        </div>
      
      </NavLink>


      <NavLink to='/PaymentConfig' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaToolbox className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Payment Config.</h4>

        </div>
      
      </NavLink>


      <NavLink to='/AccountSetting' className='link' activeclassName = 'active'>
      
        <div>
        
          <BsCurrencyBitcoin className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Account Setting</h4>

        </div>
      
      </NavLink>

      <NavLink to='/Finance' className='link' activeclassName = 'active'>
      
        <div>
        
          <CgMenuGridO className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Finance</h4>

        </div>
      
      </NavLink>



      
      
      </div>


      












      <div className={`side2 ${open1 ? ' active' : 'inactive'}`}>

      <div className='bar' >
        
        
      
      </div>

      
      

      <div className='name' style={{display:isOpen ? "none" : "flex"}}>
      
        <div onClick={() =>{setOpen(!open)}} style={{cursor:'pointer'}}>
          <h4>Sharon Uzu</h4>
          <BiSolidDownArrow className='icon'/>
        </div>
          

          <h3 className={`accts ${open ? 'active' : 'inactive'}`} style={{backgroundColor:'transparent', color:'#8d9498', width:'90%'}}>Account Setting</h3>

        </div>
        

        
      <NavLink to='/Dashboard' lassName='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

        </div>
      
      </NavLink>


      <NavLink to='/UserRequest' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaUsers className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>User Requests</h4>

        </div>
      
      </NavLink>


      <NavLink to='/AssignOfficer' className='link' activeclassName = 'active'>
      
        <div>
        
          <BsBarChartFill className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Assign Officer</h4>

        </div>
      
      </NavLink>


      <NavLink to='/PaymentConfig' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaToolbox className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Payment Config.</h4>

        </div>
      
      </NavLink>


      <NavLink to='/AccountSetting' className='link' activeclassName = 'active'>
      
        <div>
        
          <BsCurrencyBitcoin className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Account Setting</h4>

        </div>
      
      </NavLink>

      <NavLink to='/Finance' className='link' activeclassName = 'active'>
      
        <div>
        
          <CgMenuGridO className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Finance</h4>

        </div>
      
      </NavLink>



      
      
      </div>


    </div>
  )
}

export default SideBar