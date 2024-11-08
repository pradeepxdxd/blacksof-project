import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import logo from "../../../assets/smart lights_logo.svg";

function Header() {
  return (
    <>
      <Navbar expand={"lg"} className="bg-body-tertiary nav-bg-img">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="Smart Lights Logo"
              width="130"
              height="30"
              className="me-2"
            />
          </Navbar.Brand>
          <Navbar.Toggle className=" bg-light" aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Body className="offcanvas-body">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="mx-4 text-white" href="#action1">
                  Home
                </Nav.Link>
                <Nav.Link className="mx-4 text-white" href="#action2">
                  Products
                </Nav.Link>
                <Nav.Link className="mx-4 text-white" href="#action2">
                  Software Services
                </Nav.Link>
                <Button className="mx-4" style={{ borderRadius: "1px" }}>
                  Login
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
