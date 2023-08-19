import React from 'react'
import SideBar from '../Components/SideBar';
import Header from './Header';
import '../App.css';
import avatar from '../Assets/SJGKVE5UNVESVCW7BBOHKQCZVE (1).avif';
import avatar2 from '../Assets/female-avatar-5.png'
import avatar3 from '../Assets/businessman-character-avatar-isolated_24877-60111.avif'


const UserRequest = () => {

  const Request= [

    {
      image: avatar,
      names:'Christy A.',
      state:'Rivers'
    },

    {
      image: avatar2,
      names:'Sharon Uzu',
      state:'Rivers'
    },
      
    {
      image: avatar3,
      names:'Sharon Uzu',
      state:'Rivers'
    },

    {
      image: avatar,
      names:'Victory Cyril',
      state:'Rivers'
    },

    {
      image: avatar2,
      names:'Sharon Uzu',
      state:'Rivers'
    },

    {
      image: avatar2,
      names:'Sharon Uzu',
      state:'Rivers'
    }
        
    
];


  return (
    <div className='dashb'>
      <section className='dashboard'>

        <SideBar/>

        <main>
        <Header/>
        
        <section className='finance request'>
        

        
          <div className='amount users-c'>

          <h2>Request</h2>

              {Request && Request.map(({image, names, state},index)=>{
                return(

              <div  className='cards '>
                <img src={image}/>
                <div className='info'>
                  <h3>{names}</h3>

                  <div>

                    <span>{state}</span>
                  
                  </div>
                  
                </div>
                <button type='button'>View Profile</button>
                <button type='button'>Accept</button>

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

export default UserRequest