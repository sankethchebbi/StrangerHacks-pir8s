import React from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from './data.json';

function Track() {
  const categories = data.categories;
  const expenses = data.expenses;

  const chartData = categories.map((category) => ({
    name: category.name,
    amount: expenses
      .filter((expense) => expense.category === category.id)
      .reduce((total, expense) => total + expense.amount, 0),
  }));

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mx-auto" style={{ width: '105%' }}>
            <Card.Body>
              <Card.Title>Track Expenses</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Amount Spent</th>
                    <th>Number of Expenses</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => {
                    const categoryExpenses = expenses.filter(
                      (expense) => expense.category === category.id
                    );
                    const totalAmountSpent = categoryExpenses.reduce(
                      (total, expense) => total + expense.amount,
                      0
                    );
                    return (
                      <tr key={category.id}>
                        <td>{category.name}</td>
                        <td>{totalAmountSpent}</td>
                        <td>{categoryExpenses.length}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <br></br>
              <br></br>
              <BarChart width={600} height={400} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="name" /> */}
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Track;