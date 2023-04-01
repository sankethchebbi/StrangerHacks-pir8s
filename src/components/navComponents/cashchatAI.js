import { Card, Form, Button } from 'react-bootstrap';

export default function MyCard() {
  return (
    <Card style={{ width: '85px' }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="search">
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
          <Button variant="primary" type="submit">Search</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
