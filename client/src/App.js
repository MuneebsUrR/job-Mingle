
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import { JobDetailState } from './context/JobDeatailContext';

function App() {
  return (
    <>
    <JobDetailState>
      <Navbar />

      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/' element={<Redirect to="/home" />} />
      </Routes>
        
      </JobDetailState>
    </>
  );
}

export default App;
