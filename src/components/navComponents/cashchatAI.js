import { Card, Form, Button } from 'react-bootstrap';
import React, { useState } from "react";
import axios from "axios";

export default function MyCard() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
    <Card style={{ width: '505px' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="search">
            <Form.Control type="text" placeholder="Ask me any question regarding your finances" value={prompt} onChange={handlePrompt} />
          </Form.Group><br></br>
          <Button variant="primary" type="submit">Search</Button>
        </Form>
      </Card.Body>
      <Card className="mt-2 mx-auto" style={{ width: '475px' }}>
      <Card.Body style={{ textDecorationColor: "lightblue" }}>
  <p className="text-light">{response ? response : "Here's your answer"}</p>
</Card.Body>

    </Card><hr></hr>
    </Card>
    
  </div>
  );
}
