import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

function NavHeader() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      navigate(`/search/?q=${encodedSearchTerm}`);
    };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">E SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <section className="nav-left">
            <NavDropdown title="Men" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/men/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="/men/accessories">
                Acessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/men">
                See all products
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Women" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/women/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Item href="/women/accessories">
                Acessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/women">
                See all products
              </NavDropdown.Item>
            </NavDropdown>
            </section>
            <section className="nav-right">
            <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
          </Form>
          <Nav.Link href="/account">Account</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          </section>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;