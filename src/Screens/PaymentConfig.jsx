import React from 'react';
import SideBar from '../Components/SideBar';
import Header from './Header';
import '../App.css';

const PaymentConfig = () => {
  return (
    <div className='dashb'>
      <section className='dashboard'>

        <SideBar/>

        <main>
        <Header/>
        
        <div className='send-message'>

          <h2>Configure Payment</h2>
        
          <form>

            <p>Reg. Amount</p>
            <input type='text' className='input'/>

            <p>Dues Amount</p>
            <input type='text' className='input'/>


            <input type='submit' value='Configure' className='submit'/>
            
          
          </form>
        
        </div>

        </main>

      </section>

    
    </div>
  )
}

export default PaymentConfig