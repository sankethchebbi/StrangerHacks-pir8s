import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Monitor = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const apikey = "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";

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Set up OpenAI API request
    const prompt = input.trim();
    const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apikey}`,
    };
    const data = JSON.stringify({
      prompt,
      max_tokens: 50,
      n: 1,
      stop: '\n',
    });

    console.log('Sending request:', data);

    // Send OpenAI API request
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: data,
    });

    console.log('Response:', response);

    const responseData = await response.json();
    const outputText = responseData.choices[0].text.trim();
    console.log('Output text:', outputText);

    // Update state with API response
    setInput('');
    setOutput(output + '\n' + prompt + '\n' + outputText);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Monitor with MonitorGPT</h1>
          <p>Type your message below:</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control type="text" value={input} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">Send</Button>
          </Form>
        </Col>
        <Col>
          <h1>Conversation</h1>
          <pre>{output}</pre>
        </Col>
      </Row>
    </Container>
  );
};

export default Monitor;
