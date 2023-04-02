import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Team Pir8s &lt;&gt; Devfolio - Stranger Hacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/implementation">Implementation</Nav.Link>
            <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/track">Track Expenditure</NavDropdown.Item>
              <NavDropdown.Item href="/optimize">Optimize expenditure</NavDropdown.Item>
              <NavDropdown.Item href="/monitor">Monitor Savings</NavDropdown.Item>
              <NavDropdown.Item href="/forecast">
                Forecast Expenditure, Assets value and Savings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cashchat" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '35px' }}>
  Ask CashChat.ai
</Link>


        </Container>
    


    </Navbar>
  );
}