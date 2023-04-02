// import React, { useState } from 'react';
// import { Container, Row, Col, Form, ProgressBar } from 'react-bootstrap';

// function Monitor() {
//   const [goal, setGoal] = useState(0);
//   const [savings, setSavings] = useState(0);

//   function updateSavings(amount) {
//     setSavings(amount);
//   }

//   function updateGoal(amount) {
//     setGoal(amount);
//   }

//   function calculatePercentage() {
//     return Math.floor((savings / goal) * 100);
//   }

//   return (
//     <Container className="d-flex flex-column justify-content-center align-items-center">
//       <h1 className="mb-4">Goal Setting</h1>
//       <Form>
//         <Row className="mb-3">
//           <Form.Label column sm="4">
//             Enter your savings goal:
//           </Form.Label>
//           <Col sm="8">
//             <Form.Control type="number" onChange={(e) => updateGoal(e.target.value)} />
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Form.Label column sm="4">
//             Enter your current savings:
//           </Form.Label>
//           <Col sm="8">
//             <Form.Control type="number" onChange={(e) => updateSavings(e.target.value)} />
//           </Col>
//         </Row>
//       </Form>
//       <p className="mt-4">Progress towards goal:</p>
//       <ProgressBar now={calculatePercentage()} label={`${calculatePercentage()}%`} className="w-50" />
//     </Container>
//   );
// }

// export default Monitor;
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const Monitor = () => {
  const [expenses, setExpenses] = useState([]);

  // generate random expenses data
  useEffect(() => {
    const categories = ["Food", "Transportation", "Entertainment", "Recreation", "Others"];
    const newExpenses = categories.map((category) => ({
      category: category,
      amount: Math.floor(Math.random() * 1000) + 500,
    }));
    setExpenses(newExpenses);
  }, []);

  return (
    <Container>
      <h1>Expense Dashboard</h1>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Total Expenses by Category</h5>
            </Card.Header>
            <Card.Body>
              <BarChart width={500} height={300} data={expenses}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Total Expenses</h5>
            </Card.Header>
            <Card.Body>
              <h1>
                ₹{" "}
                {expenses.reduce((total, expense) => {
                  return total + expense.amount;
                }, 0)}
              </h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Monitor;