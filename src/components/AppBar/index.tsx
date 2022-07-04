import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './styles.module.css';

export default function Appbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Gallery</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="#game">Game</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  )
}