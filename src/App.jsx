import './App.css';
import Home from './components/Home/Home'; 
import Login from "./components/login/Login"
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from './components/work/Work';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='login' element={<Login />} />
          <Route exact path='work' element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
