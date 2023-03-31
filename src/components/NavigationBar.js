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
import axios from 'axios';

export default function NavigationBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    const prompt = `Answer a question about my finances: ${searchQuery}`;
    const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const apiKey = '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';
 // Replace with your API key
    const maxTokens = 64;
    const temperature = 0.7;

    try {
      const response = await axios.post(apiEndpoint, {
        prompt,
        max_tokens: maxTokens,
        temperature: temperature
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      const answer = response.data.choices[0].text;
      console.log(answer); // Replace with your desired output
    } catch (error) {
      console.error(error);
    }
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
              <NavDropdown.Item href="/forecast">
                Forecast Expenditure, Assets value and Savings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input className="form-control me-2" type="search" placeholder="Ask CashChat about your finances" aria-label="Search" style={{width: '300px'}}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </Navbar>
  );
}
