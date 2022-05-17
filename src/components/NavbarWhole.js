import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarWhole = () => {
  const navStyles = {
    fontWeight: "550",
    letterSpacing: ".035em",
  };
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="">{`</f.d>`}</Navbar.Brand>
          <Nav.Link href="#About" style={navStyles}>
            About
          </Nav.Link>
          <Nav.Link href="#Skills" style={navStyles}>
            Skills
          </Nav.Link>
          <Nav.Link href="#Projects" style={navStyles}>
            Projects
          </Nav.Link>
          <Nav.Link href="#Resume" style={navStyles}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarWhole;
