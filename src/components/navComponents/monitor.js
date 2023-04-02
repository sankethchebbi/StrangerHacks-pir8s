import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  LineChart,
  Line,
} from "recharts";

const Monitor = () => {
  const [expenses, setExpenses] = useState([]);

  // generate random expenses data
  useEffect(() => {
    const categories = [
      "Food",
      "Transportation",
      "Entertainment",
      "Recreation",
      "Others",
    ];
    const newExpenses = categories.map((category) => ({
      category: category,
      amount: Math.floor(Math.random() * 1000) + 500,
      date: new Date().toLocaleDateString(),
    }));
    setExpenses(newExpenses);
  }, []);

  const totalExpenses = expenses.reduce(
    (accumulator, currentExpense) => accumulator + currentExpense.amount,
    0
  );
  const totalSavings = 10000 - totalExpenses;

  return (
    <Container>
      <h1>Expense Dashboard</h1>
      <Card>
        <Card.Header>
          <h5>Total Expenses by Category</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* <Col md={12}>
              <Card bg="light" style={{width: '650px'}}>
                <Card.Body>
                  <h5 className="text-center font-weight-bold">Expenses Till Date in ₹</h5>
                  <h3 className="text-center text-primary">{totalExpenses}</h3>
                </Card.Body>
              </Card>
              <Card bg="light" style={{width: '650px'}}>
                <Card.Body>
                  <h5 className="text-center font-weight-bold">Total Savings in ₹</h5>
                  <h3 className="text-center text-success">{totalSavings}</h3>
                </Card.Body>
              </Card>
            </Col> */}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
  <Card bg="light" style={{ width: '650px', marginRight: '20px' }}>
    <Card.Body>
      <h5 className="text-center font-weight-bold">Expenses Till Date in ₹</h5>
      <h3 className="text-center text-primary">{totalExpenses}</h3>
    </Card.Body>
  </Card>
  <Card bg="light" style={{ width: '650px' }}>
    <Card.Body>
      <h5 className="text-center font-weight-bold">Total Savings in ₹</h5>
      <h3 className="text-center text-success">{totalSavings}</h3>
    </Card.Body>
  </Card>
</div>
<br></br>
          </Row>
          <br></br>
          <Row>
            <Col md={6}>
              <BarChart width={500} height={300} data={expenses}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </Col>
            <Col md={6}>
              <LineChart width={500} height={300} data={expenses}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
              </LineChart>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <BarChart width={500} height={300} data={expenses}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#82ca9d" />
              </BarChart>
            </Col>
            <Col md={6}>
              <PieChart width={500} height={300}>
                <Tooltip />
                <Legend />
                <Pie
                  data={expenses}
                  dataKey="amount"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#f16821"
                  label
                />
              </PieChart>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Monitor;