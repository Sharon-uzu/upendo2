import React, {useState} from 'react';
import SideBar from '../Components/SideBar';
import Header from './Header';
import '../App.css';
import avatar from '../Assets/SJGKVE5UNVESVCW7BBOHKQCZVE (1).avif';
import avatar2 from '../Assets/female-avatar-5.png'
import avatar3 from '../Assets/businessman-character-avatar-isolated_24877-60111.avif'

const Finance = () => {

  const FinanceDues= [

    {
      image: avatar,
      names:'Christy A.',
      price:'$300',
      duration:'1 month',
      date:'02-12-2022'
    },

    {
      image: avatar2,
      names:'Sharon Uzu',
      price:'$300',
      duration:'3 months',
      date:'02-12-2022'
    },
      
    {
      image: avatar3,
      names:'Sharon Uzu',
      price:'$300',
      duration:'6 months',
      date:'02-12-2022'
    },

    {
      image: avatar,
      names:'Victory Cyril',
      price:'$300',
      duration:'3 months',
      date:'02-12-2022'
    },

    {
      image: avatar2,
      names:'Sharon Uzu',
      price:'$300',
      duration:'1 year',
      date:'02-12-2022'
    }
        
    
];


const FinanceReg= [

  {
    image: avatar2,
    names:'Racheal B.',
    price:'$300',
    duration:'1 month',
    date:'02-12-2022'
  },

  {
    image: avatar3,
    names:'Christy D.',
    price:'$300',
    duration:'3 months',
    date:'02-12-2022'
  },
    
  {
    image: avatar,
    names:'Victory C.',
    price:'$300',
    duration:'6 months',
    date:'02-12-2022'
  },

  {
    image: avatar2,
    names:'Sharon V.',
    price:'$300',
    duration:'3 months',
    date:'02-12-2022'
  },

  {
    image: avatar,
    names:'Sharon Uzu',
    price:'$300',
    duration:'1 year',
    date:'02-12-2022'
  }
      
  
];



const [open, setOpen] = useState(true);
const [open1, setOpen1] = useState(false);




  return (
    <div className='dashb'>
      <section className='dashboard'>

        <SideBar/>

        <main>
        <Header/>
        
        <section className='finance'>
        

        
          <div className='amount'>
              <div className='flex'>
                <h2 onClick={() => {
                  setOpen(true);
                  setOpen1(false);
                }}>Dues</h2>

                <h2 onClick={() => {
                  setOpen(false);
                  setOpen1(true);
                }}>Reg</h2>
              </div>

              {FinanceDues && FinanceDues.map(({image, names, price, duration, date},index)=>{
                return(

              <div  className={`cards ${open ? 'active' : 'inactive'}`}>
                <img src={image}/>
                <div className='info'>
                  <h3>{names}</h3>

                  <div>

                    <span>{price}</span>
                   <span>{duration}</span>
                  
                  </div>
                  
                </div>
                <h4>{date}</h4>
              </div>

              )
            })}


            {FinanceReg && FinanceReg.map(({image, names, price, duration, date},index)=>{
              return(

            <div className={`cards ${open1 ? 'active' : 'inactive'}`}>
              <img src={image}/>
              <div className='info'>
                <h3>{names}</h3>

                <div>

                  <span>{price}</span>
                 <span>{duration}</span>
                
                </div>
                
              </div>
              <h4>{date}</h4>
            </div>

            )
          })}
          
          </div>

          <div className='total'>

            <div>
              <h2>Total Dues</h2>
              <p>$71,000</p>

            </div>

            <div>
              <h2>Total Registration</h2>
              <p>$71,000</p>
            </div>
            
            


            <button type="button">Request Payment</button>
          
          </div>
        
        </section>
        
        

        </main>

      </section>

    
    </div>
  )
}

export default Finance