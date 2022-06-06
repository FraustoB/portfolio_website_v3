import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.scss";

const NavbarWhole = () => {
  const navStyles = {
    fontWeight: "550",
    letterSpacing: ".035em",
  };

  const logoStyles = {
    fontWeight: "600",
    letterSpacing: ".035em",
    marginRight: "0.5rem",
  };
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="Navbar-container">
        <Nav className="me-auto">
          <Navbar.Brand
            href="#Intro"
            className="Navbar-text"
            style={logoStyles}
          >{`</f.d>`}</Navbar.Brand>
          <Nav.Link href="#About" style={navStyles}>
            <p className="Navbar-text">About</p>
          </Nav.Link>
          <Nav.Link href="#Skills" style={navStyles}>
            <p className="Navbar-text">Skills</p>
          </Nav.Link>
          <Nav.Link href="#Projects" style={navStyles}>
            <p className="Navbar-text">Projects</p>
          </Nav.Link>
          <Nav.Link href="#Resume" style={navStyles}>
            <p className="Navbar-text">Contact</p>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarWhole;
