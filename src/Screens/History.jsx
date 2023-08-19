import React, {useState} from 'react';
import SideBar from '../Components/SideBar';
import '../App.css';
import Side from '../Components/Side';
import Header from './Header';

const History = () => {

  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);


  return (
    <div className='dashb'>
        

        <section className='dashboard'>

          <SideBar/>

          <main>
            <Header/>

            <section className='left'>
            
            
            

              <h2>Transactions on your account</h2>

              <div className='transaction'>
              

                  <div className='menu'>

                      <span className='dep' onClick={() => {
                        setOpen(true);
                        setOpen1(false);
                        setOpen2(false);
                      }}>Deposits</span>

                      <span onClick={() => {
                        setOpen(false);
                        setOpen1(true);
                        setOpen2(false)
                      }}>Withdrawals</span>

                      <span onClick={() => {
                        setOpen(false);
                        setOpen1(false);
                        setOpen2(true)
                      }}>Others</span>
              
                  </div>

                  
                  


                  <div className='table'>
                      <div className='first'>
                          <div>
                              <span>Show <input type='number' className='no'/> entries</span>
                          </div>
                          <div>
                              <span>Search <input type='search' className='search'/></span>
                          </div>
                  
                      </div>


                      <table className={`tab1 ${open ? 'active' : 'inactive'}`}>
                        <tr className='table1'>
                          <th>Amount</th>
                          <th>Payment mode</th>
                          <th>Status</th>
                          <th>Date created</th>
                        </tr>

                        <tr>
                          <td>$600</td>
                          <td>USDT (ERC20)</td>
                          <td className='status'>Pending</td>
                          <td>Thu, Aug 10, 2023 10:54 AM</td>
                        </tr>
                      </table>


                        <table className={`tab2 ${open1 ? 'active' : 'inactive'}`}>
                          <tr className='table2'>
                            <th>Amount requested</th>
                            <th>Amount + charges</th>
                            <th>Receiving mode</th>
                            <th>Status</th>
                            <th>Date created</th>
                          </tr>

                          <tr>
                            <td>$600</td>
                            <td>$700</td>
                            <td>Transfer</td>
                            <td className='status'>Pending</td>
                            <td>Thu, Aug 10, 2023 10:54 AM</td>
                          </tr>
                        </table>


                        <table className={`tab3 ${open2 ? 'active' : 'inactive'}`}>
                            <tr className='table1'>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Plan/Narratione</th>
                                <th>Date created</th>
                            </tr>

                            <tr>
                                <td>$600</td>
                                <td>Bonus</td>
                                <td>SignUp Bonus</td>
                                <td>Thu, Aug 10, 2023 10:54 AM</td>
                            </tr>
                        </table>
                  
                  </div>
                  
              
              </div>

            </section>



          
          </main>
        </section>  
    
    </div>
  )
}

export default History