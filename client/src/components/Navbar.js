import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useJobDetailContext } from '../context/JobDeatailContext';
import 'bootstrap/dist/css/bootstrap.min.css';
function AppNavbar() {
  const { loginUser,setLoginUser } = useJobDetailContext();
  const handleCLick = () => {
   
  }
  const navigate = useNavigate();
  
  const handlelogoutbtn = () => {
    setLoginUser('')
    navigate('/')
  }
  return (
    <Navbar id='App-Navbar' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{ color: '#00bf63' }} id='navbar-brand' className='fs-5 mx-1' to="#home">
          <span className='job-text'>Job</span> <span className='nest-text'>  Nest</span>
        </Navbar.Brand>
        <Navbar.Toggle id='navbar-button' aria-controls="responsive-navbar-nav" onClick={handleCLick} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          {loginUser && loginUser.length > 0 &&
            <Nav>
              <p className='fw-bold'>  Welcome {loginUser}</p>
              
            </Nav>

          
          }
          {loginUser && loginUser.length > 0 &&
           <Nav>
           <button onClick={handlelogoutbtn} type="button" className=' mx-2 btn btn-dark'>Logout</button>
          </Nav>
          
          }
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;