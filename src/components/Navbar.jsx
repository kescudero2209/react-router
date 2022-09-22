import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import pastel from "../img/pastel.png";

function App() {
  return (
    <>
    <Navbar bg="danger" variant="danger">
    <Container>
      
      <Nav className="me-auto">
        <Nav.Link className="text-light" href="#home">Home</Nav.Link>
        <Nav.Link className="text-light" href="#contacto">Contacto</Nav.Link>
      </Nav>
      <Navbar.Brand className="text-light" href="#home">HappyCake<img className="pastel" src={pastel} alt="ícono de un pastel"></img></Navbar.Brand>
    </Container>
  </Navbar>

    </>
  );
}

export default App;