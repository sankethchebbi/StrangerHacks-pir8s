import React from "react";

export default function testingAPIonProd(){
const data = {
    key1: 'value1',
    key2: 'value2',
    // ... more data from your JSON file
  };
  
  const question = 'What is the value of key1?';
  
  fetch('http://localhost:8000/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, data }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Answer:', result.answer);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}