import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Course from './pages/Course';
import CourseList from './pages/CourseList';

import Contact from './pages/Contact';
import StudentVerification from './pages/StudentVerification';
import Privacy from './pages/Privacy';
import { ToastContainer } from 'react-toastify';

export const backenUrl = import.meta.env.VITE_BACKEND_URL;



const App = () => {
  

  return (
    <>
    <ToastContainer />
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/courseList/:id' element={<CourseList />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/sv' element={<StudentVerification/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
