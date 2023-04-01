import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Team Sriram &lt;&gt; Devfolio - Stranger Hacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/implementation">Implementation</Nav.Link>
            <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/track">Track Expenditure</NavDropdown.Item>
              <NavDropdown.Item href="/optimize">Optimize expenditure</NavDropdown.Item>
              <NavDropdown.Item href="/monitor">Monitor Savings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/forecast">
                Forecast Expenditure, Assets value and Savings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Ask CashChat about your finances" aria-label="Search" style={{width: '300px'}}/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>


    </Navbar>
  );
}