import React from 'react';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Screens/DashBoard';
import History from './Screens/History';
import Side from './Components/Side';
import UserRequest from './Screens/UserRequest';
import AssignOfficer from './Screens/AssignOfficer';
import PaymentConfig from './Screens/PaymentConfig';
import AccountSetting from './Screens/AccountSetting';
import Finance from './Screens/Finance';
import SendMessage from './Screens/SendMessage';





function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<LogIn />} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Dashboard' element={<DashBoard/>} />
      <Route path='/History' element={<History/>} />
      <Route path='/Side' element={<Side/>} />
      <Route path='/UserRequest' element={<UserRequest/>} />
      <Route path='/AssignOfficer' element={<AssignOfficer/>} />
      <Route path='/PaymentConfig' element={<PaymentConfig/>} />
      <Route path='/AccountSetting' element={<AccountSetting/>} />
      <Route path='/Finance' element={<Finance/>} />
      <Route path='/Send' element={<SendMessage/>} />



    </Routes>
    </div>
  );
}

export default App;
