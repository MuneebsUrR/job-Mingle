
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import { JobDetailState } from './context/JobDeatailContext';
import TrendingJobs from './components/TrendingJobs';
function App() {
  return (
    <>
    <JobDetailState>
      <Navbar />

      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
        {/* <TrendingJobs/> */}
      </JobDetailState>
    </>
  );
}

export default App;
