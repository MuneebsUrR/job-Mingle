
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes,Redirect } from 'react-router-dom';
import { JobDetailState } from './context/JobDeatailContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <JobDetailState>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
        
      </JobDetailState>
    </>
  );
}

export default App;
