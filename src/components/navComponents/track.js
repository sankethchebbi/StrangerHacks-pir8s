import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
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
      <Row>
        <Col>
          <h1>Track Expenses</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
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
        </Col>
        <Col md={6}>
          <BarChart width={600} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </Col>
      </Row>
    </Container>
  );
}

export default Track;