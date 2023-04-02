import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Forecast() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataUrl = '/data.json';
      const response = await fetch(dataUrl);
      const data = await response.json();

      const { input, output } = processData(data);

      const model = await trainModel(input, output);

      const predictedOutput = await predict(model, input);

      const forecastData = formatForecastData(data, predictedOutput);

      setChartData(forecastData);
    }

    fetchData();
  }, []);

  const formatForecastData = (data, predictedOutput) => {
    const forecastData = [];
    const predictedOutputData = Array.from(predictedOutput.dataSync());

    for (let i = 0; i < predictedOutputData.length; i++) {
      const date = new Date(data[i].date);
      forecastData.push({
        date: date.toLocaleDateString(),
        expenditure: data[i].expenditure,
        forecast: predictedOutputData[i],
      });
    }

    return forecastData;
  };

  const processData = (data) => {
    const input = [];
    const output = [];

    for (let i = 0; i < data.length - 1; i++) {
      const inputData = [data[i].expenditure];
      const outputData = [data[i + 1].expenditure];

      input.push(inputData);
      output.push(outputData);
    }

    return { input, output };
  };

  const trainModel = async (input, output) => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'adam' });
    const inputTensor = tf.tensor(input);
    const outputTensor = tf.tensor(output);
    await model.fit(inputTensor, outputTensor, { epochs: 200 });

    return model;
  };

  const predict = async (model, input) => {
    const inputTensor = tf.tensor(input);
    const predictedOutput = model.predict(inputTensor);

    return predictedOutput;
  };

  return (
    <div className="App">
      <h1>Expenditure Forecast</h1>
      <div style={{ width: '80%', margin: 'auto' }}>
        <LineChart width={800} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="expenditure" stroke="#8884d8" />
          <Line type="monotone" dataKey="forecast" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}

export default Forecast;
