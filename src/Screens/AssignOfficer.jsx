import React, {useState} from 'react';
import SideBar from '../Components/SideBar';
import Header from './Header';
import '../App.css';
import Modal from "react-modal";


const AssignOfficer = () => {


  
  // Modal SignUp MODAL

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const  [data, setData] = useState(null);
  const  [datas, setDatas] = useState();

  const  [print, setPrint] = useState(false);

  const  [prints, setPrints] = useState(false);


  function getData(val){
    setPrint(false);
    setData(val.target.value);
  }

  function getDatas(event){
    setPrints(false);
    setDatas(event.target.value);
  }

  

  return (
    <div className='dashb'>
      <section className='dashboard'>

        <SideBar/>

        <main>
        <Header/>
        
        <div className='send-message'>

          <h2>Assign Officer</h2>
        
          <form >
  
            <p>Enter Officer's name</p>
            <input type='text' className='input' onChange={getData}/>

            <p>What Office?</p>
            <select value={datas} onChange={getDatas}>
              <option value=''></option>
              <option>Single User</option>
              <option>Fellowship Officer</option>
              <option>General</option>
            </select>


            <button type='button' className='submit' style={{cursor:'pointer'}} 
            onClick={() => {
              setIsModalOpen(true);
              setPrint(true);
              setPrints(true)
            }}
             >Proceed</button>
            
          
          </form>
        
        </div>

        </main>

      </section>


      <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1'>
              <div className='modal1-content'>
                <div className='close'>
                  <button onClick={() => setIsModalOpen(false)} style={{cursor:'pointer'}}>X</button>
                </div>

                <form>

                  <h3>
                    <span className='title'>Officer:</span>
                    {
                      print? <span>{data}</span>
                      : null
                  }
                  
                  </h3>

                  <h3>
                    <span className='title'>Office:</span>
                    <span>
                    {
                      prints? <span>{datas}</span>
                      : null
                  }
                    </span>
                  </h3>

                  <div className='textarea'>
                    <textarea cols='10' rows='10'></textarea>
                    <button type='submit'>Add</button>
                  </div>
                
                
                </form>
                

              </div>

            </div>
            
          </Modal>


    
    </div>
  )
}

export default AssignOfficer