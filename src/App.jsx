import './App.css';
import Home from './components/Home/Home'; 
import Login from "./components/login/Login"
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './components/work/Work';
import AppointmentForm from './components/oppointment/AppointmentForm ';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='login' element={<Login />} />
          <Route exact path='login/register' element={<Register />} />
          <Route exact path='work' element={<Work />} />
          <Route exact path='form' element={<AppointmentForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
