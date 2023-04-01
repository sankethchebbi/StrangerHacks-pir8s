// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

// export default function NavigationBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="/">Team Pir8s &lt;&gt; Devfolio - Stranger Hacks</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/implementation">Implementation</Nav.Link>
//             <NavDropdown title="Our Products" id="basic-nav-dropdown">
//               <NavDropdown.Item href="/track">Track Expenditure</NavDropdown.Item>
//               <NavDropdown.Item href="/optimize">Optimize expenditure</NavDropdown.Item>
//               <NavDropdown.Item href="/monitor">Monitor Savings</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="/forecast">
//                 Forecast Expenditure, Assets value and Savings
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
      

//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Ask CashChat about your finances" aria-label="Search" style={{width: '300px'}}/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>


//     </Navbar>
//   );
// }

import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import openai from 'openai';

openai.apiKey = 'YOUR_API_KEY_HERE';

export default function NavigationBar() {
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const input = event.target.elements.search.value;

    const prompt = `Ask CashChat about your finances:\n\n${input}\n\nCashChat:`;

    const completions = await openai.complete({
      engine: 'davinci',
      prompt: prompt,
      maxTokens: 1024,
      n: 1,
      stop: ['\n'],
    });

    const message = completions.choices[0].text.trim();

    setResponse(message);
  };

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
              <NavDropdown.Divider />
              <NavDropdown.Item href="/forecast">
                Forecast Expenditure, Assets value and Savings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <form class="d-flex" role="search" onSubmit={handleSubmit}>
          <input class="form-control me-2" type="search" name="search" placeholder="Ask CashChat about your finances" aria-label="Search" style={{width: '300px'}}/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

      </Container>

      {response &&
        <div className="card mt-3">
          <div className="card-body">{response}</div>
        </div>
      }

    </Navbar>
  );
}
