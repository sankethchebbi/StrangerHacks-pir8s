import React from 'react';
import { Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Expenditures: 1000, Savings: 500, 'Asset Values': 10000 },
  { name: 'Feb', Expenditures: 2500, Savings: 1000, 'Asset Values': 20000 },
  { name: 'Mar', Expenditures: 1500, Savings: 750, 'Asset Values': 15000 },
  { name: 'Apr', Expenditures: 2000, Savings: 1000, 'Asset Values': 18000 },
  { name: 'May', Expenditures: 3000, Savings: 1500, 'Asset Values': 25000 },
  { name: 'Jun', Expenditures: 5000, Savings: 2000, 'Asset Values': 40000 },
];

const Forecast = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ width: '55%' }}>
        <Card.Header>
          <h5>Expenditures, Savings, and Asset Values</h5>
          <small>Monthly trend</small>
        </Card.Header>
        <Card.Body>
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Expenditures" stroke="#8884d8" />
            <Line type="monotone" dataKey="Savings" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Asset Values" stroke="#ffc658" />
          </LineChart>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Forecast;
