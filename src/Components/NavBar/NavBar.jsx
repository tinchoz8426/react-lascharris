import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-lascharris.png';

function NavBar() {
  return (
    <Navbar className="navbar-container" bg="light" expand="lg">
      <Container className="mb-0">
        <Navbar.Brand as={Link} to="/">
          <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo lascharris"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto align-items-center">
            <Nav.Link as={Link} to={"/"}>
              Inicio
            </Nav.Link>
            <NavDropdown
              
              title="Categorías"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/category">
                Todos los productos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/pañuelos">
                Pañuelos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/scrunchies">
                Scrunchies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/perfuminas">
                Perfuminas
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/shipping">
              Envios
            </Nav.Link>
            <Nav.Link as={Link} to="/payment">
              Medios de pago
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contactanos
            </Nav.Link>
          </Nav>
          <Nav.Link className="d-flex justify-content-center" as={Link} to="/cart">
            <CartWidget />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
