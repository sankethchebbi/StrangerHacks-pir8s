import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";

const GoalState = () => {
  const [goal, setGoal] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleCurrentSavingsChange = (event) => {
    setCurrentSavings(event.target.value);
  };

  const calculateProgress = () => {
    const percentage = (currentSavings / goal) * 100;
    return Math.min(percentage, 100);
  };

  return (
    <div>
      <h1>Goal State</h1>
      <Form>
        <Form.Group controlId="goal">
          <Form.Label>Savings Goal</Form.Label>
          <Form.Control type="number" value={goal} onChange={handleGoalChange} />
        </Form.Group>
        <Form.Group controlId="currentSavings">
          <Form.Label>Current Savings</Form.Label>
          <Form.Control type="number" value={currentSavings} onChange={handleCurrentSavingsChange} />
        </Form.Group>
        <Button variant="primary" onClick={calculateProgress}>
          Calculate Progress
        </Button>
      </Form>
      <br />
      {goal && currentSavings && (
        <>
          <h3>Progress towards goal</h3>
          <ProgressBar now={calculateProgress()} label={`${calculateProgress().toFixed(2)}%`} />
        </>
      )}
    </div>
  );
};

export default GoalState;