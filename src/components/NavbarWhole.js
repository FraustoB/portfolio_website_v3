import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarWhole = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand href="HeaderText">{`</f.d>`}</Navbar.Brand>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Resume">Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarWhole;
