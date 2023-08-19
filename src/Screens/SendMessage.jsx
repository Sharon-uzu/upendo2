import React, {useState, useCallback, useRef} from 'react';
import SideBar from '../Components/SideBar';
import Header from './Header';
import '../App.css';
import preview from '../Assets/female-avatar-5.png'

const SendMessage = () => {

  const [logo, setLogo] = useState("");
  const imageInputRef = useRef();

  const handleCreateBase64 = useCallback(async (e)=> {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setLogo(base64);
    
  }, []);

  const handleChangeImage = () => {
    
    // setLogo('');
    imageInputRef.current.click()
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if(!file){
        alert('Please select an image');
      }else{
        fileReader.readAsDataURL(file);
        fileReader.onload = () =>{
          resolve(fileReader.result)
        }
      }
      fileReader.onerror = (error) =>{
        reject(error);
      }
  })};

  const deleteImage = (e) => {
    e.preventDefault();
    setLogo(null);
    imageInputRef.current.value = "";

  };


  return (
    <div className='dashb'>
      <section className='dashboard'>

        <SideBar/>

        <main>
        <Header/>
        
        <div className='send-message'>

          <h2>Send Push Message</h2>
        
          <form>

            <textarea cols='30' rows='8' placeholder='Message'></textarea>
            <p>Send to</p>
            <select>
              <option value=''></option>
              <option value='1'>Single User</option>
              <option value='2'>Fellowship Officer</option>
              <option value='3'>General</option>
            </select>

            <p>Add Photo</p>
            <div className='file'>
              <input type='file' name='logo' ref={imageInputRef}  id='contained-button-file' onChange={handleCreateBase64}/>
            </div>

            <div className='logo-container'>
              
                
                {
                  logo ? (
                    <div className='preview'>

                      <div className='image-container'>
                        <img src={logo}/>
                      </div>

                        <button type="button" onClick={handleChangeImage}>Change</button>
                      
                        <button onClick={deleteImage} className='del'>Delete</button>
                    </div>
                  ): null 
                }
              
              
            </div>

            <input type='submit' value='Send' className='submit'/>
            
          
          </form>
        
        </div>

        </main>

      </section>

    
    </div>
  )
}

export default SendMessage