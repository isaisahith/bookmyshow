import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { handleLogout, isUserLoggedIn } from '../../utils/helper';
import { useEffect, useState } from 'react';
import './Navbar.css'

function CustomNavbar({user, setUser}) {

  

  

  const [isLogged, setIsLogged] = useState(false);

  const handleLoginLogout = ()=>{
      setIsLogged(!isLogged);
      handleLogout();

  }

  useEffect(()=>{
      const isLoggedIn = isUserLoggedIn();
      setIsLogged(isLoggedIn);
  },[isLogged])

  
  
  return (
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          
            <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Link to='/login'>
        <button className='login-logout' onClick={()=>handleLoginLogout()}>{(isLogged!=null)?'Logout':'Login'}</button>
        </Link>
      </Navbar>

      
    </>
  );
}

export default CustomNavbar;