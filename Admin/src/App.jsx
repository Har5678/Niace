import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Admin from './Components/Admin';
import Navbar from './Components/Navbar';
import AdminLogin from './Components/AdminLogin';
import AdminPage from './Components/AdminPage';
import { ToastContainer } from 'react-toastify';
import FranchiseLogin from './pages/FranchiseLogin';
import Fpage from './pages/FranchisePage';


export const backenUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [token2, setToken2] = useState(localStorage.getItem("token2") || "");
  const navigate = useNavigate(); // 👈 Use navigate for redirection

  useEffect(() => {
    if(token){
    localStorage.setItem("token", token);
    if (token) {
      navigate('/adminPage'); // 👈 Navigate when token is set
      return; 
    }
  }
  if(token2){
    localStorage.setItem("token2", token2);
    if (token2) {
      
      navigate('/franchise'); // Redirect to franchise page when token2 is set
      return;
    }
  }
  else {
    navigate('/'); // Redirect to franchise login if token2 is removed
  }
  }, [token,token2]); // 👈 React will listen to token changes


  return (
    <>
      <ToastContainer />
      <Navbar token2={token2} setToken2={setToken2} token={token} setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/adminLogin" element={<AdminLogin setToken={setToken} />} />
        <Route path="/adminPage" element={<AdminPage token={token}/>} />
        <Route path='/franchise-login' element={<FranchiseLogin setToken2={setToken2}/>} />
        <Route path='/franchise' element={<Fpage token2={token2}/>} />
      </Routes>
    </>
  );
};

export default App;
