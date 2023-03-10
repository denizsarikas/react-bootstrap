import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header" className="header fixed-top">
      <Container fluid="xl" className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1>UpConstruction<span>.</span></h1>
        </Link>

        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="navbar" className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <Navbar.Toggle aria-controls="navbar" className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item href="#">Dropdown 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Dropdown 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 4</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 5</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown title="Deep Dropdown" id="nav-dropdown-2">
                  <NavDropdown.Item href="#">Deep Dropdown 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 2</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 3</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 4</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 5</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
