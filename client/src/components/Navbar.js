import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import { Link } from 'react-router-dom';
import { useJobDetailContext } from '../context/JobDeatailContext';

function AppNavbar() {
  const { loginUser } = useJobDetailContext();
  const handleCLick = () => {
    console.log('clicked')
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
          <Nav>
           Welcome {loginUser}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;