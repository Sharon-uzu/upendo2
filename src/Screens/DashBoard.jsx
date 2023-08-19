import React from 'react';
import Header from './Header';
import '../App.css';
import {BsCurrencyBitcoin } from "react-icons/bs";
import SideBar from '../Components/SideBar';
import { BsBarChartFill } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";
import { HiArrowsExpand} from "react-icons/hi";
import { MdEmail} from "react-icons/md";
import { HiOutlineMailOpen} from "react-icons/hi";
import { BiDownload} from "react-icons/bi";
import { BiMoneyWithdraw} from "react-icons/bi";
// import Side from '../Components/Side';





const DashBoard = () => {


  const Cards= [

    {
        icon: BsCurrencyBitcoin,
        price:'$25.00',
        text:'Account Balance',
        background:'#6861ce'
    },

    {
      icon: BsBarChartFill,
      price:'$0.00',
      text:'Total Profit',
      background:'#31ce36'
    },
      
    {
      icon: AiFillGift,
      price:'$25.00',
      text:'Total Bonus',
      background:'#6861ce'

    },

    {
      icon: HiArrowsExpand,
      price:'$0.00',
      text:'Total Referral Bonus',
      background:'#48abf7'

    },

    {
      icon: MdEmail,
      price:'$0.00',
      text:'Total Investment Plans',
      background:'#f25961'

    },

    {
      icon: HiOutlineMailOpen,
      price:'$25.00',
      text:'Total Active Investment Plans',
      background:'#31ce36'
    },


    {
      icon: BiDownload,
      price:'$0.00',
      text:'Total Deposit',
      background:'#ffad46'
    },


    {
      icon: BiMoneyWithdraw,
      price:'$0.00',
      text:'Total Withdrawals',
      background:'#f25961'

    }
        
    
];




  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <SideBar/>

          <main>
          <Header/>

          <section className='left'>
         
              <h2>Welcome, Sharon Uzu!</h2>

              <div className='cards-container'>
              
                {Cards && Cards.map(({icon, price, text, background},index)=>{
                  return(

                    <div className='card1'>
                      <div className='icon-card' style={{backgroundColor:background}}>
                      <i className='icons'>{React.createElement(icon)}</i>
                      </div>

                      <div className='card-text'>
                        <h3>{price}</h3>
                        <p>{text}</p>
                      </div>
                    </div>

                  )
                })}


              
              </div>
          </section>

          </main>
        
        </section>
    </div>
  )
}

export default DashBoard