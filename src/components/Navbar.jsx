import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import pastel from "../img/pastel.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container className="justify-content-start">
          <Link to="/home" className="text-white text-decoration-none">
            Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          Contacto
          </Link>
        </Container>
        <Navbar.Brand className="text-light me-auto" href="#home">
          Happy Cake<img className="pastel" src={pastel} alt="ícono de un pastel"></img>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavBar;