import { NavbarBrand, NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="#home">Navbar</NavbarBrand>
          <Nav className="me-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="/quotations">Quotations</NavLink>
            <NavLink href="/agreements">Agreements</NavLink>
            <NavLink href="/invoices">Invoices</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
