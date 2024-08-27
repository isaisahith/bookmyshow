import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CustomNavbar({user, setUser}) {

  
  
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

        {user?<h5 style={{marginRight:"50px", cursor:"pointer", color:"white"}} onClick={()=>setUser(!user)}>Logout</h5>:<h5 style={{marginRight:"50px", cursor:"pointer", color:"white"}} onClick={()=>setUser(!user)}>Login</h5>}
      </Navbar>

      
    </>
  );
}

export default CustomNavbar;