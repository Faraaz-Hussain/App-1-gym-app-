import './App.css';
import Home from './components/Home/Home';
import Login from "./components/login/Login"
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
    </div>
  );
}

export default App;
