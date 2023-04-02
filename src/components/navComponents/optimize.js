import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import GoalState from './Goalstate';

const ExpenseCategories = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [totals, setTotals] = useState({});
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleCategoryChange = (event) => {
    setExpenseCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (expenseCategory && expenseAmount) {
      setExpenses([...expenses, { category: expenseCategory, amount: expenseAmount }]);
      setExpenseCategory("");
      setExpenseAmount("");
    }
  };

  const calculateTotals = () => {
    const categoryTotals = {};
    let total = 0;
    expenses.forEach((expense) => {
      const { category, amount } = expense;
      if (categoryTotals[category]) {
        categoryTotals[category] += Number(amount);
      } else {
        categoryTotals[category] = Number(amount);
      }
      total += Number(amount);
    });
    setTotals(categoryTotals);
    setTotalExpenses(total);
  };

  return (
    <div>
    <Container>
      <h1>Expense Categories</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" value={expenseCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="recreation">Recreation</option>
            <option value="others">Others</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" value={expenseAmount} onChange={handleAmountChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Expense
        </Button>
      </Form>
      <br />
      <Button variant="success" onClick={calculateTotals}>
        Calculate Totals
      </Button>
      <br />
      <br />
      {Object.keys(totals).length > 0 && (
        <>
          <Row>
            <Col>
              <h3>Expenses</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td>{expense.category}</td>
                      <td>{expense.amount} ₹</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total Expenses</td>
                    <td>{totalExpenses.toFixed(2)} ₹</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col>
              <h3>Totals</h3>
              <Table striped bordered hover>
              <thead>
  <tr>
    <th>Category</th>
    <th>Total Amount</th>
  </tr>
</thead>
<tbody>
  {Object.keys(totals).map((category, index) => (
    <tr key={index}>
      <td>{category}</td>
      <td>{totals[category].toFixed(2)} ₹</td>
    </tr>
  ))}
</tbody>
</Table>
</Col>
</Row>
</>
)}
</Container>
<GoalState/><br></br>
</div>
);
};
export default ExpenseCategories;