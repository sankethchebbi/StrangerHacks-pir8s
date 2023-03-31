import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
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
              <NavDropdown.Item href="/trackexpenditure">Track Expenditure</NavDropdown.Item>
              <NavDropdown.Item href="/equity-split">Optimize expenditure</NavDropdown.Item>
              <NavDropdown.Item href="/client-data">Monitor Savings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bpmn">
                Forecast Expenditure, Assets value and Savings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

