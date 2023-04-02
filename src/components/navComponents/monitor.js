import React, { useState } from 'react';
import { Container, Row, Col, Form, ProgressBar } from 'react-bootstrap';

function Monitor() {
  const [goal, setGoal] = useState(0);
  const [savings, setSavings] = useState(0);

  function updateSavings(amount) {
    setSavings(amount);
  }

  function updateGoal(amount) {
    setGoal(amount);
  }

  function calculatePercentage() {
    return Math.floor((savings / goal) * 100);
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-4">Goal Setting</h1>
      <Form>
        <Row className="mb-3">
          <Form.Label column sm="4">
            Enter your savings goal:
          </Form.Label>
          <Col sm="8">
            <Form.Control type="number" onChange={(e) => updateGoal(e.target.value)} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Label column sm="4">
            Enter your current savings:
          </Form.Label>
          <Col sm="8">
            <Form.Control type="number" onChange={(e) => updateSavings(e.target.value)} />
          </Col>
        </Row>
      </Form>
      <p className="mt-4">Progress towards goal:</p>
      <ProgressBar now={calculatePercentage()} label={`${calculatePercentage()}%`} className="w-50" />
    </Container>
  );
}

export default Monitor;