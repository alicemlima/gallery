import { Container, Button, Form, NavDropdown } from 'react-bootstrap';
import styles from './styles.module.css';

export default function FilterBar() {
  return (
    <Container className={styles.padding}>
      <Form.Group>
        <Form.Select>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  )
}